import React from "react";

function useLocalStorage(keyName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(keyName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(keyName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }
      setItem(parsedItem);
    } catch (err) {
      setError(true);
    }
  }, []);

  const saveItem = (newItems) => {
    localStorage.setItem(keyName, JSON.stringify(newItems));
    setItem(newItems);
  };

  return {
    item,
    saveItem,
    error,
  };
}

export { useLocalStorage };
