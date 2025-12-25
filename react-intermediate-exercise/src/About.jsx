import { useNavigate } from "react-router-dom";
import "./App.css";

function About() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="content-section">
        <h1>📖 About Us</h1>
        <p>
          Welcome to our application! We are dedicated to providing you with the best experience possible.
        </p>
        <p>
          Our team works tirelessly to bring you innovative solutions and exceptional service. 
          We believe in creating products that make a difference in people's lives.
        </p>
        
        <h2>🎯 Our Mission</h2>
        <p>
          To deliver high-quality, user-friendly applications that solve real-world problems 
          and enhance productivity.
        </p>
        
        <h2>💡 Our Values</h2>
        <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc' }}>
          <li style={{ marginBottom: '0.8rem', color: '#546e7a' }}>
            <strong>Innovation:</strong> We constantly push boundaries and explore new possibilities
          </li>
          <li style={{ marginBottom: '0.8rem', color: '#546e7a' }}>
            <strong>Quality:</strong> We never compromise on the quality of our work
          </li>
          <li style={{ marginBottom: '0.8rem', color: '#546e7a' }}>
            <strong>User-First:</strong> Our users are at the heart of everything we do
          </li>
        </ul>
        
        <button onClick={() => navigate("/")} className="back-button">
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default About;
