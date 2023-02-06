import React, { useState } from "react";
import "../css/style.css";

// const handleSubmit = (event) => {
//   event.preventDefault();
//   setMessage2(message1 + message2);
// };
const FormFloatingBasicExample = () => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [result, setResult] = useState("");
  const handleChange = (event) => {
    setMessage1(event.target.value);
  };
  const handleChange2 = (event) => {
    setMessage2(event.target.value);
  };
  const handleSubmit = () => {
    setResult(message1 + message2);
  };
  return (
    <div className="container">
      <form>
        <input
          type="text"
          name="message1"
          onChange={handleChange}
          placeholder="Username..."
        />
        <br />
        <input
          type="text"
          name="message2"
          onChange={handleChange2}
          placeholder="Password..."
        />
        <br />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <h2>Value of form:{result} </h2>
      </form>
    </div>
  );
};

export default FormFloatingBasicExample;
