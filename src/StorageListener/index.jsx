import React from "react";

function StorageListener({ blogDataStorageKey, sincronizeBlog }) {
  window.addEventListener("storage", (change) => {
    if (change.key === blogDataStorageKey) {
      sincronizeBlog();
    }
  });
}

export { StorageListener };
