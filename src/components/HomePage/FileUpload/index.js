import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Alert,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState("");

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

  const handleDrop = (event) => {
    event.preventDefault();
    handleFiles(event.dataTransfer.files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const formatFileSize = (size) => {
    return size > 1024 * 1024
      ? `${(size / (1024 * 1024)).toFixed(2)} MB`
      : `${(size / 1024).toFixed(2)} KB`;
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Upload Files
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
    </Box>
  );
};

export default FileUpload;
