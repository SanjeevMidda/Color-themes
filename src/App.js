import { useState } from "react";
import "./index.css";

function App() {
  // colors
  const colors = ["red", "blue", "green", "orange", "grey"];

  // state to hold color selected
  const [colorSelected, setColorSelected] = useState("white");

  // create background color for App

  const backgroundColor = {};

  return <div className="App" style={{ backgroundColor: colorSelected }}></div>;
}

export default App;
