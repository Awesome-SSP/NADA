import express from "express";
import multer from "multer";
import Report from "../../models/Report.js"; // Ensure file extensions are specified if using ES modules
import path from 'path';
const router = express.Router();

// Example Multer configuration -- it is required jaisa ki memory m save karka mongo m save kara raha h
const storage = multer.memoryStorage(); // Store files in memory for simplicity
const upload = multer({ storage });

// Define your routes here
router.post(
  "/upload",upload.single("file"),
  // controller logic yeah p
  async (req, res) => {
    try {
      const { category, description, submitAnonymously, addDetails } = req.body;
      const file = req.file;

      // Create a new report document
      const newReport = new Report({
        category,
        description,
        submitAnonymously: submitAnonymously === "true", // Convert to boolean
        addDetails: addDetails === "true", // Convert to boolean
        file: {
          data: file.buffer, // Store file as a binary buffer
          contentType: file.mimetype,
          name: file.originalname,
          extension: path.extname(file.originalname),
        },
      });

      // Save to the database
      await newReport.save();
      res.status(201).json({ message: "Report uploaded successfully" });
    } catch (error) {
      console.error("Error saving report:", error);
      res.status(500).json({ error: "Failed to upload report" });
    }
  }
);

router.get("/files", async (req, res) => {
  try {
    const reports = await Report.find({}, "file.name file.contentType"); // Fetch only required fields
    if (!reports.length) {
      return res.status(404).json({ message: "No files found" });
    }

    const files = reports.map((report) => ({
      id: report._id,
      name: report.file.name,
      type: report.file.contentType,
    }));

    res.status(200).json(files);
  } catch (error) {
    console.error("Error retrieving files:", error);
    res.status(500).json({ error: "Failed to fetch files" });
  }
});

router.get("/file/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const report = await Report.findById(id);

    if (!report || !report.file || !report.file.data) {
      return res.status(404).json({ error: "File not found" });
    }
    // Extract the extension from the report document
    const fileExtension = report.file.extension;  // This should be like '.pdf', '.jpg', etc.

    // Construct the file name by adding the extension
    const fileName = `${report.file.name}${fileExtension}`;

     // Set the content type based on the file's MIME type
     res.set("Content-Type", report.file.contentType);
 
     // Set the content disposition to indicate the filename (with extension)
     res.set("Content-Disposition", `attachment; filename="${report.file.name}"`);
 
     // Send the file data as a binary stream
     res.send(report.file.data);
  } catch (error) {
    console.error("Error retrieving file:", error);
    res.status(500).json({ error: "Failed to retrieve file" });
  }
});

export default router;
