import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import "./App.css";

function PostDetail() {
  const { postId } = useParams();

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (loading) return (
    <div className="page-container">
      <div className="loading">
        <h2>⏳ Loading post...</h2>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="page-container">
      <div className="error">
        <h2>❌ Error</h2>
        <p>{error.message}</p>
      </div>
    </div>
  );

  return (
    <div className="page-container">
      <div className="content-section">
        <div style={{ marginBottom: '1rem' }}>
          <span className="badge">Post #{postId}</span>
        </div>
        <h1>{data.title}</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          {data.body}
        </p>

        <Link to="/dashboard" className="back-button">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default PostDetail;
