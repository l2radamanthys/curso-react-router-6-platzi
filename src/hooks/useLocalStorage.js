import React from "react";

function useLocalStorage(keyName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [sincronizedItem, setSincroizedItem] = React.useState(true);
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
      setSincroizedItem(true);
    } catch (err) {
      setError(true);
    }
  }, [sincronizedItem]);

  const saveItem = (newItems) => {
    localStorage.setItem(keyName, JSON.stringify(newItems));
    setItem(newItems);
  };

  const sincronizeItem = () => {
    //mas que sincronize forzar reloading
    console.log("reload");
    setSincroizedItem(false);
  };

  return {
    item,
    saveItem,
    sincronizeItem,
    error,
  };
}

export { useLocalStorage };
