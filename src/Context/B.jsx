import React from "react";
import { myContext } from "./A";
const B = () => {
  return (
    <div>
      <h1>CHILD B</h1>
      <myContext.Consumer>{(name) => <h1>{name}</h1>}</myContext.Consumer>
      <h1>CHILD B</h1>
    </div>
  );
};

export default B;
