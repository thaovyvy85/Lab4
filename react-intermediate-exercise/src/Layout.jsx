import { Link, Outlet } from "react-router-dom";
import "./App.css";

function Layout() {
  return (
    <div className="page-container">
      <nav>
        <Link to="/">🏠 Home</Link>
        <Link to="/about">📖 About</Link>
        <Link to="/login">🔐 Login</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;
