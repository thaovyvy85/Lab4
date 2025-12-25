import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import "./App.css";

function Dashboard() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return (
    <div className="dashboard-container">
      <div className="loader-box">
        <div className="spinner"></div>
        <p>Đang tải dữ liệu...</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="dashboard-container">
      <div className="error-card">
        <h2>Oops! Có lỗi xảy ra</h2>
        <p>{error.message}</p>
        <button onClick={() => window.location.reload()}>Thử lại</button>
      </div>
    </div>
  );

return (
  <div className="page-container">
    <div className="content-section">
      <div className="dashboard-header">
        <h1>📊 Dashboard</h1>
        <button className="form-container button" style={{width: 'auto', padding: '0.5rem 1rem'}}>Logout</button>
      </div>
      <p>Danh sách bài viết mới nhất từ hệ thống</p>
    </div>

    <div className="post-grid">
      {data.slice(0, 20).map((post) => (
        <div key={post.id} className="post-item">
          <Link to={`/dashboard/post/${post.id}`}>
            <span className="post-id">POST #{post.id}</span>
            <div className="post-title">{post.title}</div>
            <p style={{color: '#64748b', fontSize: '0.9rem'}}>Xem chi tiết nội dung...</p>
          </Link>
        </div>
      ))}
    </div>
  </div>
    );
}

export default Dashboard;