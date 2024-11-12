import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false); // State to control modal visibility
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const credit = { username: "admin", password: "123456" };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleAdminLogin = () => {
    setShowAdminLogin(true); // Show the admin login modal
  };

  const handleUserLogin = () => {
    navigate("/User");
  };

  const closeAdminLogin = () => {
    setShowAdminLogin(false); // Close the admin login modal
  };

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    if(credit.username===username && credit.password===password){
      navigate("/Admin")
    }
    else{
      alert("Wrong Credentials");
    } 
  }

  return (
    <div className="home-container">
      <div className="welcome-section">
        <img
          src="https://via.placeholder.com/150" // Replace with a logo or decorative image URL
          alt="Document Bot Logo"
          className="logo"
        />
        <h1 className="welcome-title">Welcome to the Document Search Bot</h1>
        <p className="welcome-subtitle">Please select your login type:</p>
      </div>
      <div className="button-section">
        <button
          onClick={handleAdminLogin}
          className="login-button admin-button"
        >
          Login as Admin
        </button>
        <button onClick={handleUserLogin} className="login-button user-button">
          Login as User
        </button>
      </div>
      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Admin Login</h2>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Username"
                className="input-field"
                value={username}
                onChange={handleUsername}
                style={{color:"black"}}
              />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={handlePassword}
                style={{color:"black"}}
              />
              <button type="submit" className="submit-button">
                Login
              </button>
              <button onClick={closeAdminLogin} className="close-button">
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
