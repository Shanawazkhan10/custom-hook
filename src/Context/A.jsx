import React, { createContext, useState } from "react";
import B from "./B";
import C from "./C";
export const myContext = createContext();
const A = () => {
  const [Name] = useState("shanawaz");
  return (
    <div>
      <h1>THIS IS parent</h1>
      <myContext.Provider value={Name}>
        <C/>
      </myContext.Provider>
    </div>
  );
};

export default A;
