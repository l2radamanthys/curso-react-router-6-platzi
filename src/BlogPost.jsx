import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogData } from "./blogData";

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const blogPost = blogData.find((post) => post.slug === slug);

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
    </>
  );
}

export { BlogPost };
