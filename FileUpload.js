// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction,
//   IconButton,
//   Alert,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// const FileUpload = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [uploading, setUploading] = useState(false);

//   const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes

//   // Handle file selection via input
//   const handleFileChange = (event) => {
//     handleFiles(event.target.files);
//   };

//   // Process the selected files
//   const handleFiles = (files) => {
//     const validFiles = [];
//     const invalidFiles = [];

//     // Validate files based on size
//     Array.from(files).forEach((file) => {
//       if (file.size > MAX_FILE_SIZE) {
//         invalidFiles.push(file.name);
//       } else {
//         validFiles.push(file);
//       }
//     });

//     // Set error message if any files are too large
//     if (invalidFiles.length > 0) {
//       setError(`The following files are too large: ${invalidFiles.join(", ")}`);
//     } else {
//       setError(""); // Clear the error message
//     }

//     // Add valid files to the list
//     setSelectedFiles((prevFiles) => [...prevFiles, ...validFiles]);
//   };

//   // Remove file from the selected files list
//   const handleRemoveFile = (index) => {
//     setSelectedFiles((prevFiles) =>
//       prevFiles.filter((_, fileIndex) => fileIndex !== index)
//     );
//   };

//   // Handle drag-and-drop
//   const handleDrop = (event) => {
//     event.preventDefault();
//     handleFiles(event.dataTransfer.files);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault(); // Allow drop
//   };

//   // Helper to format file size in KB/MB
//   const formatFileSize = (size) => {
//     return size > 1024 * 1024
//       ? `${(size / (1024 * 1024)).toFixed(2)} MB`
//       : `${(size / 1024).toFixed(2)} KB`;
//   };

//   // Function to upload the files to the backend
//   const uploadFiles = async () => {
//     if (selectedFiles.length === 0) return;

//     setUploading(true);
//     setSuccessMessage("");

//     const formData = new FormData();
//     selectedFiles.forEach((file) => {
//       formData.append("file", file);
//     });

//     try {
//       const response = await fetch("https://localhost:44310/api/file/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setSuccessMessage(`File uploaded successfully: ${result.FileName}`);
//         setSelectedFiles([]); // Clear selected files
//       } else {
//         const error = await response.text();
//         setError(`Error: ${error}`);
//       }
//     } catch (error) {
//       setError("Error uploading file.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Typography variant="h6" gutterBottom>
//         Upload Files
//       </Typography>

//       {/* Drag-and-Drop Area */}
//       <Box
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//         sx={{
//           border: "2px dashed gray",
//           borderRadius: 2,
//           padding: 3,
//           textAlign: "center",
//           marginBottom: 2,
//         }}
//       >
//         <Typography variant="body1">
//           Drag and drop files here, or click to select
//         </Typography>
//         <input
//           type="file"
//           multiple
//           onChange={handleFileChange}
//           style={{ display: "none" }}
//           id="file-input"
//         />
//         <label htmlFor="file-input">
//           <Button variant="contained" component="span" sx={{ marginTop: 2 }}>
//             Select Files
//           </Button>
//         </label>
//       </Box>

//       {/* Error Message */}
//       {error && (
//         <Alert severity="error" onClose={() => setError("")}>
//           {error}
//         </Alert>
//       )}

//       {/* Success Message */}
//       {successMessage && (
//         <Alert severity="success" onClose={() => setSuccessMessage("")}>
//           {successMessage}
//         </Alert>
//       )}

//       {/* Selected Files List */}
//       <List>
//         {selectedFiles.map((file, index) => (
//           <ListItem key={index}>
//             <ListItemText
//               primary={file.name}
//               secondary={formatFileSize(file.size)}
//             />
//             <ListItemSecondaryAction>
//               <IconButton
//                 edge="end"
//                 color="error"
//                 onClick={() => handleRemoveFile(index)}
//               >
//                 <DeleteIcon />
//               </IconButton>
//             </ListItemSecondaryAction>
//           </ListItem>
//         ))}
//       </List>

//       {/* Upload Button */}
//       <Box sx={{ marginTop: 2 }}>
//         <Button
//           variant="contained"
//           onClick={uploadFiles}
//           disabled={uploading}
//         >
//           {uploading ? "Uploading..." : "Upload Files"}
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default FileUpload;

// 1


// 

//3


//   this was the fimal one 

// 

//5

import React, { useState } from "react";
import { Box, Button, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Alert, LinearProgress } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes

  const handleFileChange = (event) => {
    handleFiles(event.target.files);
  };

  const handleFiles = (files) => {
    const validFiles = [];
    const invalidFiles = [];

    Array.from(files).forEach((file) => {
      if (file.size > MAX_FILE_SIZE) {
        invalidFiles.push(file.name);
      } else {
        validFiles.push(file);
      }
    });

    if (invalidFiles.length > 0) {
      setError(`The following files are too large: ${invalidFiles.join(", ")}`);
    } else {
      setError("");
    }

    setSelectedFiles((prevFiles) => [...prevFiles, ...validFiles]);
  };

  const handleRemoveFile = (index) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((_, fileIndex) => fileIndex !== index)
    );
  };

  const handleUploadFiles = async () => {
    if (selectedFiles.length === 0) {
      setError("Please select files to upload.");
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => formData.append('files', file));

    try {
      setUploading(true);
      const response = await axios.post('https://localhost:44310/api/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setUploading(false);
      setSuccessMessage('Files uploaded successfully!');
      setSelectedFiles([]); // Clear the files list
    } catch (error) {
      setUploading(false);
      setError("Failed to upload files.");
    }
  };

  const formatFileSize = (size) => {
    return size > 1024 * 1024
      ? `${(size / (1024 * 1024)).toFixed(2)} MB`
      : `${(size / 1024).toFixed(2)} KB`;
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Upload and Process Files
      </Typography>

      {/* File Upload Section */}
      <Box sx={{ border: "2px dashed gray", padding: 3, textAlign: "center", marginBottom: 2 }}>
        <input type="file" multiple onChange={handleFileChange} style={{ display: "none" }} id="file-input" />
        <label htmlFor="file-input">
          <Button variant="contained" component="span" sx={{ marginTop: 2 }}>
            Select Files
          </Button>
        </label>
      </Box>

      {/* Error Message */}
      {error && <Alert severity="error" onClose={() => setError("")}>{error}</Alert>}

      {/* Success Message */}
      {successMessage && <Alert severity="success" onClose={() => setSuccessMessage("")}>{successMessage}</Alert>}

      {/* Upload Button */}
      <Button
        variant="contained"
        onClick={handleUploadFiles}
        sx={{ marginTop: 2 }}
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload Files'}
      </Button>

      {uploading && <LinearProgress sx={{ marginTop: 2 }} />}

      {/* File List */}
      <List>
        {selectedFiles.map((file, index) => (
          <ListItem key={index}>
            <ListItemText primary={file.name} secondary={formatFileSize(file.size)} />
            <ListItemSecondaryAction>
              <IconButton edge="end" color="error" onClick={() => handleRemoveFile(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FileUpload;



//==================last

// import React, { useState } from "react";
// import { Box, Button, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Alert, LinearProgress } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import axios from "axios";

// const FileUpload = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [uploading, setUploading] = useState(false);

//   const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes

//   const handleFileChange = (event) => {
//     handleFiles(event.target.files);
//   };

//   const handleFiles = (files) => {
//     const validFiles = [];
//     const invalidFiles = [];

//     Array.from(files).forEach((file) => {
//       if (file.size > MAX_FILE_SIZE) {
//         invalidFiles.push(file.name);
//       } else {
//         validFiles.push(file);
//       }
//     });

//     if (invalidFiles.length > 0) {
//       setError(`The following files are too large: ${invalidFiles.join(", ")}`);
//     } else {
//       setError("");
//     }

//     setSelectedFiles((prevFiles) => [...prevFiles, ...validFiles]);
//   };

//   const handleRemoveFile = (index) => {
//     setSelectedFiles((prevFiles) =>
//       prevFiles.filter((_, fileIndex) => fileIndex !== index)
//     );
//   };

//   const handleUploadFiles = async () => {
//     if (selectedFiles.length === 0) {
//       setError("Please select files to upload.");
//       return;
//     }

//     const formData = new FormData();
//     selectedFiles.forEach((file) => formData.append('files', file));

//     try {
//       setUploading(true);
//       const response = await axios.post('https://localhost:44310/api/files/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       setUploading(false);
//       setSuccessMessage('Files uploaded successfully!');
//       setSelectedFiles([]); // Clear the files list
//     } catch (error) {
//       setUploading(false);
//       setError("Failed to upload files.");
//     }
//   };

//   const formatFileSize = (size) => {
//     return size > 1024 * 1024
//       ? `${(size / (1024 * 1024)).toFixed(2)} MB`
//       : `${(size / 1024).toFixed(2)} KB`;
//   };

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Typography variant="h6" gutterBottom>
//         Upload and Process Files
//       </Typography>

//       {/* File Upload Section */}
//       <Box sx={{ border: "2px dashed gray", padding: 3, textAlign: "center", marginBottom: 2 }}>
//         <input type="file" multiple onChange={handleFileChange} style={{ display: "none" }} id="file-input" />
//         <label htmlFor="file-input">
//           <Button variant="contained" component="span" sx={{ marginTop: 2 }}>
//             Select Files
//           </Button>
//         </label>
//       </Box>

//       {/* Error Message */}
//       {error && <Alert severity="error" onClose={() => setError("")}>{error}</Alert>}

//       {/* Success Message */}
//       {successMessage && <Alert severity="success" onClose={() => setSuccessMessage("")}>{successMessage}</Alert>}

//       {/* Upload Button */}
//       <Button
//         variant="contained"
//         onClick={handleUploadFiles}
//         sx={{ marginTop: 2 }}
//         disabled={uploading}
//       >
//         {uploading ? 'Uploading...' : 'Upload Files'}
//       </Button>

//       {uploading && <LinearProgress sx={{ marginTop: 2 }} />}

//       {/* File List */}
//       <List>
//         {selectedFiles.map((file, index) => (
//           <ListItem key={index}>
//             <ListItemText primary={file.name} secondary={formatFileSize(file.size)} />
//             <ListItemSecondaryAction>
//               <IconButton edge="end" color="error" onClick={() => handleRemoveFile(index)}>
//                 <DeleteIcon />
//               </IconButton>
//             </ListItemSecondaryAction>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default FileUpload;
