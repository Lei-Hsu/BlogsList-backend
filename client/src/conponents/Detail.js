import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  let { id } = useParams();
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8080/post/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, [id]);
  const handleClick = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/post/${id}`, {
      method: "DELETE",
    });
    window.location.replace("/");
  };
  return (
    <div>
      {blogs && (
        <div className="navbar">
          <div className="link">
            <Link to="/">主頁</Link>
          </div>
          <h1>{blogs.title}</h1>
          <p>{blogs.content}</p>
          <button className="deleteBtn" onClick={handleClick}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default Detail;
