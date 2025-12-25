import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page-container">
      <div className="hero">
        <h1>✨ Welcome Home</h1>
        <p>Explore our amazing features and discover what we have to offer</p>
        <div>
          <Link to="/about" className="link-button">
            📖 Learn About Us
          </Link>
          <Link to="/users/123" className="link-button">
            👤 View User Profile
          </Link>
        </div>
      </div>
      
      <div className="content-section">
        <h2>🚀 Getting Started</h2>
        <p>
          This is your starting point. Navigate through the application using the links above 
          or explore our features through the navigation menu.
        </p>
      </div>
    </div>
  );
}

export default Home;
