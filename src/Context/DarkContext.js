import React, { createContext, useState } from "react";

export const DarkContext = createContext();

function DarkContext(children) {
  const [dark, setDark] = useState(false);

  return (
    <DarkContext.Provider value={(dark)}>
      {children}
    </DarkContext.Provider>
  );
}

export default DarkContext;
