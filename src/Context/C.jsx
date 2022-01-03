import React from "react";
import { myContext } from "./A";
const C = ({ bname }) => {
  return (
    <div>
      <h1>Hello C</h1>
      <myContext.Consumer>{(data) => <h1>{data}</h1>}</myContext.Consumer>
    </div>
  );
};

export default C;
