const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I am an h1 tag"),
    React.createElement("h2", { id: "h2" }, "I am an h2 tag"),
  ]), 
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I am an h1 tag"),
    React.createElement("h2", { id: "h2" }, "I am an h2 tag")
]), 
React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I am an h1 tag"),
    React.createElement("h2", { id: "h2" }, "I am an h2 tag")
]),
]);

// const parent = React.createElement("h1", {}, "Hello world from React");

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
