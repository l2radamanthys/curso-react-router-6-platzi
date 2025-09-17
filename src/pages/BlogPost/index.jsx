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
      <div className="text-right px-4 py-4">
        <button
          onClick={returnToBlog}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Volver al Blog
        </button>
      </div>
      <div className="max-w-xl mx-auto p-6 rounded-2xl space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">{blogPost.title}</h2>

        <p className="text-sm text-gray-600">
          Autor: <span className="font-medium">{blogPost.author}</span>
        </p>

        <p className="text-gray-700 leading-relaxed">{blogPost.content}</p>

        <div className="flex flex-wrap gap-3 pt-4">
          {canDelete && (
            <button
              onClick={deleteBlogPost}
              className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
            >
              Eliminar Post
            </button>
          )}

          {canEdit && (
            <button
              onClick={editPost}
              className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
            >
              Modificar Post
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export { BlogPost };
