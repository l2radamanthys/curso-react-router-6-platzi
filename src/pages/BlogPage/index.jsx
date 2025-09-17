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
      {/* <h1>Blog</h1> */}

      <Outlet />

      <div className="text-center mt-4">
        {blogData.map((post) => (
          <BlogLink key={post.slug} post={post} />
        ))}
      </div>

      <div className="text-center mt-4">
        {auth.isAuthenticated && (
          <button
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
            onClick={addNewPost}
          >
            Nuevo Post
          </button>
        )}
      </div>
    </>
  );
}

function BlogLink({ post }) {
  return (
    <Link
      className="px-3 py-2 rounded-md text-sm transition-colors text-blue-950"
      to={`/blog/${post.slug}`}
    >
      {post.title}
    </Link>
  );
}

export { BlogPage };
