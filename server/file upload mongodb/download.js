const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// MongoDB connection details
const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'fileupload';
const collectionName = 'Upload';

// Function to retrieve and save a file
async function download(fileName, outputDir) {
    const client = new MongoClient(uri);

    try {
        // Connect to MongoDB
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Find the file by name
        const fileDoc = await collection.findOne({ name: fileName });

        if (!fileDoc) {
            console.error(`File with name "${fileName}" not found.`);
            return false;
        }

        // Define the output file path
        const outputPath = path.join(outputDir, fileDoc.name);

        // Write the binary data to the file
        fs.writeFileSync(outputPath, fileDoc.data.buffer);
        console.log(`File downloaded successfully to: ${outputPath}`);
        return true;
    } catch (err) {
        console.error('Error downloading file:', err);
        return false;
    } finally {
        // Close the MongoDB connection
        await client.close();
    }
}

// Example usage
const fileName = 'Sih main pdf.pdf'; // Name of the file you want to download
const outputDir = './downloads'; // Directory where the file will be saved

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

download(fileName, outputDir)
    .then(success => {
        if (success) {
            console.log('File download completed.');
        } else {
            console.log('File download failed.');
        }
    })
    .catch(err => console.error('Unexpected error:', err));
