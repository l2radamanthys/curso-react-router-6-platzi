import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogData } from "./blogData";
import { useAuth } from "./auth";

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const auth = useAuth();
  const blogPost = blogData.find((post) => post.slug === slug);

  const canDelete =
    auth.hasPermission("can-delete-any-post") ||
    blogPost.author === auth.user?.username;

  const canEdit =
    auth.hasPermission("can-edit-any-post") ||
    blogPost.author === auth.user?.username;

  const returnToBlog = () => {
    // navigate(-1); // -1 go to previos page similar windows.location(-1)
    navigate("/blog");
  };

  return (
    <>
      <h2>{blogPost.title}</h2>
      <button onClick={returnToBlog}>Volver al Blog</button>
      <p>Author: {blogPost.author}</p>
      <p>{blogPost.content}</p>

      {canDelete && <button>Eliminar Post</button>}
      {canEdit && <button>Modificar Post</button>}
    </>
  );
}

export { BlogPost };
