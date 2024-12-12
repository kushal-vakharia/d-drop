import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, List, ListItem, ListItemText, Button, CircularProgress } from "@mui/material";

const ListWorkflows = () => {
  const [workflows, setWorkflows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch workflows from the API
  useEffect(() => {
    const fetchWorkflows = async () => {
      try {
        const response = await axios.get("https://localhost:44310/api/workflow/list");
        setWorkflows(response.data);
      } catch (err) {
        setError("Error fetching workflows.");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkflows();
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <h2>Your Workflows</h2>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <List>
          {workflows.map((workflow) => (
            <ListItem key={workflow.id}>
              <ListItemText primary={workflow.name} secondary={`Created on: ${workflow.createdAt}`} />
              <Button variant="contained" href={`/workflow/${workflow.id}`}>
                View Details
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default ListWorkflows;
