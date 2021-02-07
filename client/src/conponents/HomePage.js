import React from "react";
import { Link } from "react-router-dom";

function HomePage({ blogs }) {
  return (
    <>
      {blogs.map((blogs) => (
        <div key={blogs.id}>
          <h1>{blogs.title}</h1>
          <p>{blogs.content}</p>
          <Link to={`/${blogs.id}`}>read more...</Link>
        </div>
      ))}
    </>
  );
}

export default HomePage;
