import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth";
import "./BlogPage.css";

function BlogPage({ blogData }) {
  const auth = useAuth();
  const navigate = useNavigate();

  const addNewPost = () => {
    navigate("/blog/add");
  };

  return (
    <>
      <h1>Blog</h1>

      <Outlet />

      <ul className="BlogPage-post-list">
        {blogData.map((post) => (
          <BlogLink key={post.slug} post={post} />
        ))}
      </ul>

      {auth.isAuthenticated && <button onClick={addNewPost}>Nuevo Post</button>}
    </>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

export { BlogPage };
