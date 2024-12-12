// // import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './Login';
// import Dashboard from './Dashboard';  // Assuming you have a Dashboard component
// import CreateWorkflow from "./CreateWorkflow"; // Import the CreateWorkflow component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         {/* Add other routes as needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import UserWorkflows from './UserWorkflows';
import Dashboard from "./Dashboard";  // Assuming you have a Dashboard component

import CreateWorkflow from "./CreateWorkflow";
import ListWorkflows from "./ListWorkflows";
import WorkflowDetails from "./WorkflowDetails";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workflows" element={<UserWorkflows />} />
        <Route path="/create-workflow" element={<CreateWorkflow />} />
        <Route path="/workflows" element={<ListWorkflows />} />
        <Route path="/workflow/:id" element={<WorkflowDetails />} />

        
      </Routes>
    </Router>
  );
}

export default App;
