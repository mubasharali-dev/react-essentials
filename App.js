import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Essentials of React</h1>;

const JsxHeading = () => (
  <>
    <Title />
    {Title()}
    <Title></Title>
    <h1>New jsx is here</h1>
    <p>Hello </p>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JsxHeading />);
