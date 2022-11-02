import React, { createContext, useState } from "react";

export const categoriesContext = createContext();

export default function CategoriesProvider({ children }) {
  const [category, setCategory] = useState("All Categories");

  return (
    <categoriesContext.Provider value={{ category, setCategory }}>
      {children}
    </categoriesContext.Provider>
  );
}
