import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, List, ListItem, ListItemText, CircularProgress } from "@mui/material";

const WorkflowDetails = ({ match }) => {
  const [workflow, setWorkflow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorkflowDetails = async () => {
      try {
        const response = await axios.get(`https://localhost:44310/api/workflow/${match.params.id}`);
        setWorkflow(response.data);
      } catch (err) {
        setError("Error fetching workflow details.");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkflowDetails();
  }, [match.params.id]);

  return (
    <Box sx={{ padding: 2 }}>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          <Typography variant="h4">{workflow.name}</Typography>
          <Typography variant="subtitle1">Created on: {workflow.createdAt}</Typography>

          <h3>Steps</h3>
          <List>
            {workflow.workflowSteps.map((step) => (
              <ListItem key={step.id}>
                <ListItemText
                  primary={step.actionType}
                  secondary={`Order: ${step.order}, Details: ${step.actionDetails}`}
                />
              </ListItem>
            ))}
          </List>

          <h3>Files</h3>
          <List>
            {workflow.workflowFiles.map((wf) => (
              <ListItem key={wf.id}>
                <ListItemText primary={wf.file.name} secondary={`File Size: ${wf.file.size}`} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );
};

export default WorkflowDetails;
