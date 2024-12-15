import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./components/SignupPage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload-file" element={<Dashboard />} />
        <Route path="/update" element={<Dashboard />} />
        <Route path="/logs" element={<Dashboard />} />
        <Route path="/my-profile" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
