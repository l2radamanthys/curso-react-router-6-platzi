import React from "react";

function Header() {
  return (
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-4xl mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-gray-900">Mi Blog</h1>
        <p class="text-gray-600 mt-2">
          Implementación de un Blog con React + React Router DOM
        </p>
      </div>
    </header>
  );
}

export { Header };
