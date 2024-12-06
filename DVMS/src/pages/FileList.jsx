import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/files");
        setFiles(response.data); // List of files
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, []);

  const downloadFile = async (id, name) => {
    try {
      const response = await axios.get(`http://localhost:5001/api/file/${id}`, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", name); // Use the file name from metadata
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div>
      <h1>Files</h1>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Typography variant="h6" fontWeight="medium" color="primary" pb={1}>
          File List Testing process upload and retrival from front via backend
          via database Report Puri Okay hai
        </Typography>
      </Box>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            <span>
              {file.name} ({file.type})
            </span>
            <button onClick={() => downloadFile(file.id, file.name)}>
              Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FileList = ({ fileId }) => {
//   const [fileData, setFileData] = useState(null);
//   const [fileExtension, setFileExtension] = useState('');

//   useEffect(() => {
//     // Fetch the file details from the server
//     const fetchFile = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5001/api/file/${fileId}`, {
//           responseType: 'arraybuffer',
//         });

//         // Check the file extension from the server or response
//         const fileType = response.headers['content-type'];
//         const fileName = response.headers['content-disposition']
//           .split('filename=')[1]
//           .replace(/"/g, '');
//         const extension = fileName.split('.').pop();

//         setFileExtension(extension);
//         setFileData(response.data);
//       } catch (error) {
//         console.error('Error fetching the file:', error);
//       }
//     };

//     fetchFile();
//   }, [fileId]);

//   if (!fileData) return <div>Loading...</div>;

//   // Display content based on file type
//   const renderFile = () => {
//     if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png' || fileExtension === 'gif') {
//       return <img src={`http://localhost:5001/api/file/${fileId}`} alt="File" />;
//     }

//     if (fileExtension === 'pdf') {
//       return <embed src={`http://localhost:5001/api/file/${fileId}`} type="application/pdf" width="600" height="500" />;
//     }

//     if (fileExtension === 'txt') {
//       return <pre>{fileData}</pre>;
//     }

//     // For unsupported file types, provide a download link
//     return (
//       <a href={`http://localhost:5001/api/file/${fileId}`} download>
//         Download File
//       </a>
//     );
//   };

//   return (
//     <div>
//       <h2>File Viewer</h2>
//       {renderFile()}
//     </div>
//   );
// };

// export default FileList;
