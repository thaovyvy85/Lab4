import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./App.css";

function Login() {
  const usernameRef = useRef(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper">
    <div className="form-container">
      <h1>🔐 Welcome</h1>
      <p style={{textAlign: 'center', marginBottom: '1.5rem', color: 'gray'}}>Đăng nhập để tiếp tục</p>
      <form onSubmit={handleLogin}>
        <input ref={usernameRef} type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Đăng Nhập</button>
      </form>
    </div>
  </div>
  );
}

export default Login;
