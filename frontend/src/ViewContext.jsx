import React, { createContext, useState } from "react";

export const ViewContext = createContext();

const ViewProvider = ({ children }) => {
  const [view, setView] = useState("table");

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
};

export default ViewProvider;
