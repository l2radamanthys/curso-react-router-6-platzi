import React from "react";
import "./BlogPostAdd.css";
import { useAuth } from "../../auth";
import { useNavigate, useParams, useLocation } from "react-router-dom";

function BlogPostAdd({ blogData, addPost }) {
  const [formData, setFormData] = React.useState({
    title: "",
    slug: "",
    content: "",
    author: "",
  });

  const auth = useAuth();
  const navigate = useNavigate();
  const { slug } = useParams();
  const location = useLocation();

  React.useEffect(() => {
    if (slug) {
      const blogPost = blogData.find((post) => post.slug === slug);
      console.log(slug, blogPost, blogData);
      if (blogPost) {
        const canEdit =
          auth.hasPermission("can-edit-any-post") ||
          blogPost.author === auth.user?.username;
        if (!canEdit) {
          auth.setRedirect(location.pathname);
          navigate("/unauthorized");
        }
        setFormData(blogPost);
      }
    } else {
      setFormData({ ...formData, author: auth.user?.username });
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      const generatedSlug = value
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
      setFormData({ ...formData, title: value, slug: generatedSlug });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const savePost = (event) => {
    event.preventDefault();
    addPost(formData);
    navigate(`/blog/${formData.slug}`);
  };

  return (
    <form className="BlogPost-form" onSubmit={savePost}>
      <div>
        <label htmlFor="">Titulo</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Slug</label>
        <input
          type="text"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          disabled="true"
        />
      </div>
      <div>
        <label htmlFor="">Contenido</label>
        <textarea
          rows="5"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="w-full">
        Guardar
      </button>
    </form>
  );
}

export { BlogPostAdd };
