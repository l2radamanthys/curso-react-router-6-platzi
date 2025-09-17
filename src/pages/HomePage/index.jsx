import React from "react";

function HomePage() {
  return (
    <>
      <h1 className="text-4xl text-center mt-8 font-extrabold text-blue-600 tracking-tight">
        Mi Blog
      </h1>

      <p className="mt-4 text-center text-lg text-gray-600 max-w-2xl mx-auto">
        Implementación de un Blog con{" "}
        <span className="font-medium text-gray-800">React Router DOM</span>.
      </p>
    </>
  );
}

export { HomePage };
