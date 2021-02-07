import React, { useState } from "react";
import { Link } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleInputContent = (e) => {
    setContent(e.target.value);
  };
  const handleCreate = (e) => {
    e.preventDefault();
    const blogs = { title, content, id: 0 };
    fetch("http://localhost:8080/post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogs),
    });
    window.location.replace("/");
  };
  return (
    <div>
      <nav className="navbar">
        <h1>Create New Blog</h1>
        <Link to="/"> go back</Link>
      </nav>
      <div className="form">
        <input
          className="inputTitle"
          type="text"
          name="title"
          placeholder="title..."
          onChange={handleInputTitle}
        />
        <textarea
          className="textarea"
          name="textarea"
          cols="30"
          rows="10"
          placeholder="content..."
          onChange={handleInputContent}
        ></textarea>
        <button className="createBtn" onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
}

export default Create;
