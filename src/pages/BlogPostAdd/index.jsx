import React from "react";
import "./BlogPostAdd.css";

function BlogPostAdd() {
  const [formData, setFormData] = React.useState({
    title: "",
    slug: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      const generatedSlug = value
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
      setFormData((prev) => ({ ...prev, title: value, slug: generatedSlug }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const savePost = (event) => {
    event.preventDefault();
    console.log(":::", formData);
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
        <input type="text" name="slug" value={formData.slug} disabled="true" />
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
