import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../auth";

function BlogPost({ blogData, deletePost }) {
  const navigate = useNavigate();
  const { slug } = useParams();
  const auth = useAuth();
  const blogPost = blogData.find((post) => post.slug === slug);

  if (!blogPost) {
    return <p>Publicación "{slug}" no encontrada.</p>;
  }

  const canDelete =
    auth.hasPermission("can-delete-any-post") ||
    blogPost.author === auth.user?.username;

  const canEdit =
    auth.hasPermission("can-edit-any-post") ||
    blogPost.author === auth.user?.username;

  const returnToBlog = () => {
    navigate("/blog");
  };

  const deleteBlogPost = () => {
    deletePost(blogPost.slug);
    returnToBlog();
  };

  const editPost = () => {
    navigate(`/blog/edit/${blogPost.slug}`);
  };

  return (
    <>
      <h2>{blogPost.title}</h2>
      <button onClick={returnToBlog}>Volver al Blog</button>
      <p>Author: {blogPost.author}</p>
      <p>{blogPost.content}</p>

      {canDelete && <button onClick={deleteBlogPost}>Eliminar Post</button>}
      {canEdit && <button onClick={editPost}>Modificar Post</button>}
    </>
  );
}

export { BlogPost };
