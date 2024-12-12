// import React, { useState } from "react";
// import { Box, Button, Typography, TextField, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Alert, LinearProgress } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import axios from "axios";

// const CreateWorkflow = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [uploading, setUploading] = useState(false);
//   const [workflowName, setWorkflowName] = useState("");
//   const [workflowSteps, setWorkflowSteps] = useState([{ actionType: "", actionDetails: "", order: 1 }]);

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

//   const handleWorkflowNameChange = (event) => {
//     setWorkflowName(event.target.value);
//   };

//   const handleStepChange = (index, event) => {
//     const newSteps = [...workflowSteps];
//     newSteps[index][event.target.name] = event.target.value;
//     setWorkflowSteps(newSteps);
//   };

//   const handleAddStep = () => {
//     setWorkflowSteps([...workflowSteps, { actionType: "", actionDetails: "", order: workflowSteps.length + 1 }]);
//   };

//   const handleRemoveStep = (index) => {
//     setWorkflowSteps(workflowSteps.filter((_, i) => i !== index));
//   };

//   const handleUploadFiles = async () => {
//     if (!workflowName) {
//       setError("Please enter a workflow name.");
//       return;
//     }

//     if (selectedFiles.length === 0) {
//       setError("Please select files to upload.");
//       return;
//     }

//     const formData = new FormData();
//     selectedFiles.forEach((file) => formData.append("files", file));

//     const workflowRequest = {
//       Name: workflowName,
//       FileIds: [], // Empty initially, we'll get the file IDs from the upload
//       Steps: workflowSteps
//     };

//     try {
//       setUploading(true);
//       const fileUploadResponse = await axios.post("https://localhost:44310/api/files/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });

//       // After file upload, extract file IDs and associate with the workflow
//       const fileIds = fileUploadResponse.data.fileIds; // Assuming the backend returns the file IDs
//       workflowRequest.FileIds = fileIds;

//       const createWorkflowResponse = await axios.post("https://localhost:44310/api/workflow/create", workflowRequest);
//       setUploading(false);
//       setSuccessMessage(createWorkflowResponse.data.message);
//       setSelectedFiles([]);
//       setWorkflowName("");
//       setWorkflowSteps([{ actionType: "", actionDetails: "", order: 1 }]);
//     } catch (error) {
//       setUploading(false);
//       setError("Failed to upload files and create workflow.");
//     }
//   };

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Typography variant="h6" gutterBottom>Create New Workflow</Typography>

//       {/* Workflow Name */}
//       <TextField
//         label="Workflow Name"
//         value={workflowName}
//         onChange={handleWorkflowNameChange}
//         fullWidth
//         sx={{ marginBottom: 2 }}
//       />

//       {/* File Upload Section */}
//       <Box sx={{ border: "2px dashed gray", padding: 3, textAlign: "center", marginBottom: 2 }}>
//         <input type="file" multiple onChange={handleFileChange} style={{ display: "none" }} id="file-input" />
//         <label htmlFor="file-input">
//           <Button variant="contained" component="span" sx={{ marginTop: 2 }}>Select Files</Button>
//         </label>
//       </Box>

//       {/* Error Message */}
//       {error && <Alert severity="error" onClose={() => setError("")}>{error}</Alert>}

//       {/* Success Message */}
//       {successMessage && <Alert severity="success" onClose={() => setSuccessMessage("")}>{successMessage}</Alert>}

//       {/* Workflow Steps */}
//       <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
//         Workflow Steps
//       </Typography>
//       {workflowSteps.map((step, index) => (
//         <Box key={index} sx={{ marginBottom: 2 }}>
//           <TextField
//             label="Action Type"
//             value={step.actionType}
//             name="actionType"
//             onChange={(e) => handleStepChange(index, e)}
//             fullWidth
//             sx={{ marginBottom: 1 }}
//           />
//           <TextField
//             label="Action Details"
//             value={step.actionDetails}
//             name="actionDetails"
//             onChange={(e) => handleStepChange(index, e)}
//             fullWidth
//             sx={{ marginBottom: 1 }}
//           />
//           <Button variant="contained" color="error" onClick={() => handleRemoveStep(index)} sx={{ marginTop: 1 }}>
//             Remove Step
//           </Button>
//         </Box>
//       ))}

//       <Button variant="contained" onClick={handleAddStep} sx={{ marginTop: 1 }}>
//         Add Step
//       </Button>

//       {/* Upload Button */}
//       <Button
//         variant="contained"
//         onClick={handleUploadFiles}
//         sx={{ marginTop: 2 }}
//         disabled={uploading}
//       >
//         {uploading ? "Uploading..." : "Create Workflow"}
//       </Button>

//       {uploading && <LinearProgress sx={{ marginTop: 2 }} />}

//       {/* File List */}
//       <List>
//         {selectedFiles.map((file, index) => (
//           <ListItem key={index}>
//             <ListItemText primary={file.name} />
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

// export default CreateWorkflow;


import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem, CircularProgress } from "@mui/material";

const CreateWorkflow = () => {
  const [workflowName, setWorkflowName] = useState("");
  const [fileIds, setFileIds] = useState([]); // Assume you already have file IDs from a file upload
  const [steps, setSteps] = useState([{ actionType: "", actionDetails: "", order: 1 }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle step changes
  const handleStepChange = (index, event) => {
    const updatedSteps = [...steps];
    updatedSteps[index][event.target.name] = event.target.value;
    setSteps(updatedSteps);
  };

  // Add a new step
  const addStep = () => {
    setSteps([...steps, { actionType: "", actionDetails: "", order: steps.length + 1 }]);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const requestData = {
      Name: workflowName,
      FileIds: fileIds,
      Steps: steps
    };

    try {
      const response = await axios.post("https://localhost:44310/api/workflow/create", requestData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      alert("Workflow created successfully!");
    } catch (err) {
      setError("An error occurred while creating the workflow.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <h2>Create New Workflow</h2>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Workflow Name"
          variant="outlined"
          fullWidth
          value={workflowName}
          onChange={(e) => setWorkflowName(e.target.value)}
          required
        />

        {/* Step details */}
        {steps.map((step, index) => (
          <Box key={index} sx={{ marginTop: 2 }}>
            <TextField
              label="Action Type"
              variant="outlined"
              fullWidth
              value={step.actionType}
              name="actionType"
              onChange={(e) => handleStepChange(index, e)}
              required
            />
            <TextField
              label="Action Details"
              variant="outlined"
              fullWidth
              value={step.actionDetails}
              name="actionDetails"
              onChange={(e) => handleStepChange(index, e)}
              required
            />
            <TextField
              label="Order"
              variant="outlined"
              fullWidth
              value={step.order}
              name="order"
              onChange={(e) => handleStepChange(index, e)}
              required
            />
          </Box>
        ))}

        {/* Add more steps */}
        <Button variant="contained" onClick={addStep} sx={{ marginTop: 2 }}>
          Add Step
        </Button>

        <Box sx={{ marginTop: 2 }}>
          <Button
            variant="contained"
            type="submit"
            disabled={loading}
            sx={{ marginTop: 2 }}
          >
            {loading ? <CircularProgress size={24} /> : "Create Workflow"}
          </Button>
        </Box>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </Box>
  );
};

export default CreateWorkflow;

