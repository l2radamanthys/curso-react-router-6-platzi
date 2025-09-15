import React from "react";

function BlogPostAdd() {
  const savePost = () => {};

  return (
    <form onSubmit={savePost}>
      <div>
        <label htmlFor="">Titulo</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Contenido</label>
        <textarea></textarea>
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
}

export { BlogPostAdd };
