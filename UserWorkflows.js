// import React, { useState, useEffect } from "react";
// import { List, ListItem, ListItemText, Box, Typography, CircularProgress, Alert } from "@mui/material";
// import axios from "axios";

// const UserWorkflows = () => {
//   const [workflows, setWorkflows] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchWorkflows = async () => {
//       try {
//         const response = await axios.get("https://localhost:44310/api/workflow/list");
//         setWorkflows(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to load workflows.");
//         setLoading(false);
//       }
//     };

//     fetchWorkflows();
//   }, []);

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Typography variant="h6" gutterBottom>Your Workflows</Typography>

//       {loading && <CircularProgress />}
//       {error && <Alert severity="error">{error}</Alert>}

//       {!loading && workflows.length === 0 && <Typography>No workflows found.</Typography>}

//       <List>
//         {workflows.map((workflow) => (
//           <ListItem key={workflow.id}>
//             <ListItemText
//               primary={workflow.name}
//               secondary={`Created at: ${new Date(workflow.createdAt).toLocaleDateString()}`}
//             />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default UserWorkflows;

import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemText, Box, Typography, CircularProgress, Alert } from "@mui/material";
import axios from "axios";

const UserWorkflows = () => {
  const [workflows, setWorkflows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorkflows = async () => {
      try {
        // Fetch workflows from the API
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/workflow/list`, {
          headers: {
            // Example: Add authentication token if needed
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        
        setWorkflows(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load workflows.");
        setLoading(false);
        console.error(err); // Log error for debugging
      }
    };

    fetchWorkflows();
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>Your Workflows</Typography>

      {/* Show loading spinner when fetching data */}
      {loading && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <CircularProgress />
          <Typography>Loading your workflows...</Typography>
        </Box>
      )}

      {/* Show error message if something goes wrong */}
      {error && <Alert severity="error">{error}</Alert>}

      {/* Show a message if there are no workflows */}
      {!loading && workflows.length === 0 && <Typography>No workflows found.</Typography>}

      {/* Display list of workflows */}
      {!loading && workflows.length > 0 && (
        <List>
          {workflows.map((workflow) => (
            <ListItem key={workflow.id}>
              <ListItemText
                primary={workflow.name}
                secondary={`Created at: ${new Date(workflow.createdAt).toLocaleDateString()}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default UserWorkflows;
