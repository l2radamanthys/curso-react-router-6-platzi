import React from "react";
import "./BlogPostAdd.css";
import { useAuth } from "../../auth";
import { useBlogData } from "../../useBlogData";
import { useNavigate } from "react-router-dom";

function BlogPostAdd() {
  const [formData, setFormData] = React.useState({
    title: "",
    slug: "",
    content: "",
    author: "",
  });
  const auth = useAuth();
  const { blogData, addPost } = useBlogData();
  const navigate = useNavigate();

  React.useEffect(() => {
    setFormData({ ...formData, author: auth.user?.username });
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
    console.log(formData);
    console.log(blogData);
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
