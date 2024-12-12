// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import './Dashboard.css';

// // function Dashboard() {
// //   const [user, setUser] = useState(null);
// //   const navigate = useNavigate(); // Use navigate hook

// //   // Fetch the userId from localStorage and fetch user data based on that
// //   useEffect(() => {
// //     const userIdFromLocalStorage = localStorage.getItem('userId'); // Get userId from localStorage

// //     console.log('Fetched userId from localStorage:', userIdFromLocalStorage);

// //     if (userIdFromLocalStorage) {
// //       const userId = parseInt(userIdFromLocalStorage, 10);  // Ensure it's a number
// //       fetchUserData(userId);  // Fetch user data
// //     } else {
// //       navigate('/login'); // Redirect to login if no userId is found
// //     }
// //   }, [navigate]);

// //   // Function to fetch user data based on userId
// //   const fetchUserData = async (userId) => {
// //     try {
// //       const response = await axios.get(`https://localhost:44310/api/users/${userId}`);
// //       console.log('User data fetched:', response.data); // Log response to verify

// //       if (response.data) {
// //         setUser(response.data); // Set user data
// //       }
// //     } catch (error) {
// //       console.error('Error fetching user data:', error);
// //     }
// //   };

// //   const handleLogout = () => {
// //     // Clear user data and redirect to login page
// //     localStorage.removeItem('userId');
// //     navigate('/login');
// //   };

// //   return (
// //     <div className="dashboard-container">
// //       <div className="dashboard-content">
// //         {user ? (
// //           <>
// //             <h2>Welcome, {user.AppUserName}!</h2>
// //             <p>Your User ID: {user.AppUserId}</p> {/* Display the User ID */}
// //             <button onClick={handleLogout} className="logout-btn">
// //               Log Out
// //             </button>
// //           </>
// //         ) : (
// //           <p>Loading user data...</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;



// //   final 


import React, { useState, useEffect } from "react";
import { Box, Button, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Alert, Checkbox, FormControlLabel } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Dashboard.css';
import './CreateWorkflow';

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  // Options for file processing
  const [autoRename, setAutoRename] = useState(false);
  const [autoTag, setAutoTag] = useState(false);
  const [autoSort, setAutoSort] = useState(false);

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes

  // Handle file selection via input
  const handleFileChange = (event) => {
    handleFiles(event.target.files);
  };

  // Process the selected files
  const handleFiles = (files) => {
    const validFiles = [];
    const invalidFiles = [];

    // Validate files based on size
    Array.from(files).forEach((file) => {
      if (file.size > MAX_FILE_SIZE) {
        invalidFiles.push(file.name);
      } else {
        validFiles.push(file);
      }
    });

    // Set error message if any files are too large
    if (invalidFiles.length > 0) {
      setError(`The following files are too large: ${invalidFiles.join(", ")}`);
    } else {
      setError(""); // Clear the error message
    }

    // Add valid files to the list
    setSelectedFiles((prevFiles) => [...prevFiles, ...validFiles]);
  };

  // Remove file from the selected files list
  const handleRemoveFile = (index) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((_, fileIndex) => fileIndex !== index)
    );
  };

  // Helper to format file size in KB/MB
  const formatFileSize = (size) => {
    return size > 1024 * 1024
      ? `${(size / (1024 * 1024)).toFixed(2)} MB`
      : `${(size / 1024).toFixed(2)} KB`;
  };

  // Function to upload the files to the backend
  const uploadFiles = async () => {
    if (selectedFiles.length === 0) return;
  
    setUploading(true);
    setSuccessMessage("");
  
    const userIdFromLocalStorage = localStorage.getItem("userId");
    if (!userIdFromLocalStorage) {
      setError("User ID is not available.");
      setUploading(false);
      return;
    }
  
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });
    formData.append("autoRename", autoRename);
    formData.append("autoTag", autoTag);
    formData.append("autoSort", autoSort);
    formData.append("userId", userIdFromLocalStorage);
  
    try {
      const response = await fetch("https://localhost:44310/api/file/upload", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        setSuccessMessage("Files uploaded and processed successfully.");
        setSelectedFiles([]); // Clear selected files
      } else {
        const error = await response.text();
        setError(`Error: ${error}`);
      }
    } catch (error) {
      setError("Error uploading file.");
    } finally {
      setUploading(false);
    }
  };
  
  // Define the drag-and-drop handlers
  const handleDrop = (event) => {
    event.preventDefault();
    handleFiles(event.dataTransfer.files); // Process dropped files
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Allow the drop event to fire
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Upload and Process Files
      </Typography>

      {/* Drag-and-Drop Area */}
      <Box
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        sx={{
          border: "2px dashed gray",
          borderRadius: 2,
          padding: 3,
          textAlign: "center",
          marginBottom: 2,
        }}
      >
        <Typography variant="body1">
          Drag and drop files here, or click to select
        </Typography>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          style={{ display: "none" }}
          id="file-input"
        />
        <label htmlFor="file-input">
          <Button variant="contained" component="span" sx={{ marginTop: 2 }}>
            Select Files
          </Button>
        </label>
      </Box>

      {/* Error Message */}
      {error && (
        <Alert severity="error" onClose={() => setError("")}>
          {error}
        </Alert>
      )}

      {/* Success Message */}
      {successMessage && (
        <Alert severity="success" onClose={() => setSuccessMessage("")}>
          {successMessage}
        </Alert>
      )}

      {/* File Processing Options */}
      <Box sx={{ marginBottom: 2 }}>
        <FormControlLabel
          control={<Checkbox checked={autoRename} onChange={() => setAutoRename(!autoRename)} />}
          label="Auto Rename"
        />
        <FormControlLabel
          control={<Checkbox checked={autoTag} onChange={() => setAutoTag(!autoTag)} />}
          label="Auto Tag"
        />
        <FormControlLabel
          control={<Checkbox checked={autoSort} onChange={() => setAutoSort(!autoSort)} />}
          label="Auto Sort"
        />
      </Box>

      {/* Selected Files List */}
      <List>
        {selectedFiles.map((file, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={file.name}
              secondary={formatFileSize(file.size)}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                color="error"
                onClick={() => handleRemoveFile(index)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      {/* Upload Button */}
      <Box sx={{ marginTop: 2 }}>
        <Button
          variant="contained"
          onClick={uploadFiles}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Files"}
        </Button>
      </Box>
    </Box>
  );
};

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Use navigate hook

  // Fetch the userId from localStorage and fetch user data based on that
  useEffect(() => {
    const userIdFromLocalStorage = localStorage.getItem('userId'); // Get userId from localStorage

    console.log('Fetched userId from localStorage:', userIdFromLocalStorage);

    if (userIdFromLocalStorage) {
      const userId = parseInt(userIdFromLocalStorage, 10);  // Ensure it's a number
      fetchUserData(userId);  // Fetch user data
    } else {
      navigate('/login'); // Redirect to login if no userId is found
    }
  }, [navigate]);

  // Function to fetch user data based on userId
  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`https://localhost:44310/api/users/${userId}`);
      console.log('User data fetched:', response.data); // Log response to verify

      if (response.data) {
        setUser(response.data); // Set user data
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogout = () => {
    // Clear user data and redirect to login page
    localStorage.removeItem('userId');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {user ? (
          <>
            <h2>Welcome, {user.appUserName}!</h2>
            <p>Your User ID: {user.appUserId}</p> {/* Display the User ID */}
            <button onClick={handleLogout} className="logout-btn">
              Log Out
            </button>

            {/* Include the FileUpload component */}
            <FileUpload />
          </>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

// //  New 



// 


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import UserProfile from './UserProfile';  // Import UserProfile
// import FileUpload from './FileUpload';    // Import FileUpload
// import WorkflowBuilder from './WorkflowBuilder';  // Import WorkflowBuilder

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userIdFromLocalStorage = localStorage.getItem('userId');
//     if (userIdFromLocalStorage) {
//       const userId = parseInt(userIdFromLocalStorage, 10);
//       fetchUserData(userId);
//     } else {
//       navigate('/login');
//     }
//   }, [navigate]);

//   const fetchUserData = async (userId) => {
//     try {
//       const response = await axios.get(`https://localhost:44310/api/users/${userId}`);
//       if (response.data) {
//         setUser(response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('userId');
//     navigate('/login');
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-content">
//         {user ? (
//           <>
//             <UserProfile user={user} handleLogout={handleLogout} />
//             <FileUpload />
//             <WorkflowBuilder userId={user.appUserId} />
//           </>
//         ) : (
//           <p>Loading user data...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;









//-------------------------last

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import UserProfile from './UserProfile';
// import FileUpload from './FileUpload';
// import WorkflowBuilder from './WorkflowBuilder';

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userIdFromLocalStorage = localStorage.getItem('userId');
//     if (userIdFromLocalStorage) {
//       const userId = parseInt(userIdFromLocalStorage, 10);
//       fetchUserData(userId);
//     } else {
//       navigate('/login');
//     }
//   }, [navigate]);

//   const fetchUserData = async (userId) => {
//     try {
//       const response = await axios.get(`https://localhost:44310/api/users/${userId}`);
//       setUser(response.data);
//     } catch (error) {
//       console.error("Failed to fetch user data:", error);
//       navigate('/login');
//     }
//   };

//   return (
//     <div>
//       {user && (
//         <div>
//           <UserProfile user={user} />
//           <FileUpload />
//           <WorkflowBuilder userId={user.id} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

