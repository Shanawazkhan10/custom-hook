import "./App.css";
import Cp from "./Cp";
import { useRef, useState, useEffect } from "react";
import A from "./Context/A";

function App() {
  const firstNameref = useRef(null);
  const [Fname, setFname] = useState("");

  const value = Cp(Fname);
  useEffect(() => {
    console.log(value);
  }, [value]);

  const handleChange = (e) => {
    e.preventDefault();
    setFname(firstNameref.current.value);
  };
  return (
    <div className="App">
      <A/>
      <form>
        <input placeholder="First Name" ref={firstNameref} />
        <button onClick={handleChange} type="submit">
          GENERATE JOKE
        </button>
      </form>
      <h1>Fetch API Demo HoOk</h1>
      {value && JSON.stringify(value)}
    </div>
  );
}

export default App;
