import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useBlogData() {
  const { item: blogData, saveItem: setBlogData } = useLocalStorage(
    "BLOG_DATA_V1",
    blogInitialData
  );

  // const [blogData, setBlogData] = React.useState(blogInitialData);

  const addPost = (postData) => {
    setBlogData([...blogData, postData]);
  };

  const deletePost = (slug) => {
    setBlogData(blogData.filter((post) => post.slug !== slug));
  };

  const updatePost = (slug, postData) => {
    deletePost(slug);
    addPost(postData);
  };

  return {
    blogData,
    addPost,
    deletePost,
    updatePost,
  };
}

const blogInitialData = [
  {
    title: "Introducción a JavaScript",
    slug: "introduccion-a-javascript",
    author: "Ricardo D. Quiroga",
    content:
      "JavaScript es el lenguaje de programación que da vida a la web moderna. Permite crear interactividad en los sitios, manipular el DOM, consumir APIs y construir aplicaciones completas del lado del cliente y del servidor. Aprender sus fundamentos es el primer paso para entrar en el ecosistema de desarrollo web.",
  },
  {
    title: "Guía básica de Node.js",
    slug: "guia-basica-nodejs",
    author: "Marisol Gimenez",
    content:
      "Node.js es un entorno de ejecución de JavaScript basado en el motor V8 de Google Chrome. Gracias a él podemos utilizar JavaScript en el servidor, manejar peticiones HTTP, conectarnos a bases de datos y construir aplicaciones escalables. Su modelo asíncrono y orientado a eventos lo hace ideal para sistemas de alta concurrencia.",
  },
  {
    title: "Qué es TypeScript y por qué usarlo",
    slug: "que-es-typescript",
    author: "Ricardo D. Quiroga",
    content:
      "TypeScript es un superset de JavaScript que agrega tipado estático y características avanzadas para mejorar la productividad de los desarrolladores. Al usarlo, podemos detectar errores en tiempo de compilación, facilitar la autocompletación y mejorar la mantenibilidad de proyectos grandes. Es ampliamente adoptado en proyectos modernos de React, Angular y Node.",
  },
  {
    title: "Cómo funciona el Virtual DOM en React",
    slug: "virtual-dom-react",
    author: "Oriana Gimenez",
    content:
      "El Virtual DOM es una representación ligera del DOM real que utiliza React para optimizar el rendimiento. En lugar de modificar directamente la estructura del navegador, React mantiene un árbol virtual en memoria y actualiza solo los elementos que cambian. Esto reduce el costo de renderizado y permite construir interfaces de usuario rápidas y reactivas.",
  },
  {
    title: "Diferencias entre SPA y MPA",
    slug: "diferencias-spa-mpa",
    author: "Isabella Lopez",
    content:
      "Una SPA (Single Page Application) es una aplicación web que carga una sola página y actualiza dinámicamente el contenido mediante JavaScript, mejorando la experiencia del usuario. En cambio, una MPA (Multi Page Application) recarga completamente la página con cada navegación, siendo más tradicional. Ambas arquitecturas tienen ventajas y desventajas según el tipo de proyecto.",
  },
];

export { useBlogData };
