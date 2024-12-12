// import React, { useState } from "react";
// import { Box, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Alert } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import axios from "axios";

// const WorkflowBuilder = ({ userId }) => {
//   const [steps, setSteps] = useState([]);
//   const [newStep, setNewStep] = useState("");
//   const [workflowName, setWorkflowName] = useState("");
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   // Add a new step to the workflow
//   const handleAddStep = () => {
//     if (newStep.trim() === "") return;
//     setSteps([...steps, newStep]);
//     setNewStep(""); // Clear the input field after adding
//   };

//   // Remove a step from the workflow
//   const handleRemoveStep = (index) => {
//     setSteps(steps.filter((_, i) => i !== index));
//   };

//   // Save workflow to the database
//   const saveWorkflow = async () => {
//     if (!workflowName.trim()) {
//       setError("Please provide a name for the workflow.");
//       return;
//     }

//     try {
//       const response = await axios.post("https://localhost:44310/api/workflows/save", {
//         userId: userId,
//         name: workflowName,
//         steps: steps,
//       });

//       if (response.data) {
//         setSuccessMessage("Workflow saved successfully!");
//         setSteps([]); // Clear steps after saving
//         setWorkflowName(""); // Clear the workflow name
//       }
//     } catch (error) {
//       setError("Failed to save workflow.");
//     }
//   };

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Typography variant="h6" gutterBottom>Build Your Workflow</Typography>

//       {/* Workflow Name */}
//       <TextField
//         label="Workflow Name"
//         fullWidth
//         value={workflowName}
//         onChange={(e) => setWorkflowName(e.target.value)}
//         sx={{ marginBottom: 2 }}
//       />

//       {/* Add Step Section */}
//       <Box sx={{ marginBottom: 2 }}>
//         <TextField
//           label="New Step (e.g., 'Compress', 'Encrypt')"
//           fullWidth
//           value={newStep}
//           onChange={(e) => setNewStep(e.target.value)}
//         />
//         <Button
//           variant="contained"
//           onClick={handleAddStep}
//           sx={{ marginTop: 1 }}
//         >
//           Add Step
//         </Button>
//       </Box>

//       {/* Workflow Steps */}
//       <List>
//         {steps.map((step, index) => (
//           <ListItem key={index}>
//             <ListItemText primary={step} />
//             <ListItemSecondaryAction>
//               <IconButton edge="end" color="error" onClick={() => handleRemoveStep(index)}>
//                 <DeleteIcon />
//               </IconButton>
//             </ListItemSecondaryAction>
//           </ListItem>
//         ))}
//       </List>

//       {/* Save Workflow Button */}
//       <Button
//         variant="contained"
//         onClick={saveWorkflow}
//         sx={{ marginTop: 2 }}
//       >
//         Save Workflow
//       </Button>

//       {/* Error & Success Messages */}
//       {error && <Alert severity="error">{error}</Alert>}
//       {successMessage && <Alert severity="success">{successMessage}</Alert>}
//     </Box>
//   );
// };

// export default WorkflowBuilder;
