import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./App.css";

function DashboardLayout() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="page-container">
      <div className="content-section">
        <h1>📊 Dashboard Overview</h1>
        <div style={{ marginBottom: '2rem' }}>
          <p>
            Authentication Status: 
            <span className="badge" style={{ 
              background: isAuthenticated 
                ? 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' 
                : 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)'
            }}>
              {isAuthenticated ? '✓ Authenticated' : '✗ Not Authenticated'}
            </span>
          </p>
        </div>

        <div style={{ 
          background: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '15px',
          border: '2px solid #e9ecef'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>📝 Quick Actions</h3>
          <Link to="/dashboard/post/123" className="link-button">
            View Sample Post #123
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
