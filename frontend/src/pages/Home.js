import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to SafeNetV4.0</h1>
      <p>Choose a service below:</p>
      
      <div className="home-buttons">
        <button onClick={() => navigate("/scan-url")}>🔍 Scan a URL</button>
        <button onClick={() => navigate("/scan-email")}>📧 Scan an Email</button>
        <button onClick={() => navigate("/education")}>📚 Education</button>
      </div>
    </div>
  );
};

export default Home;
