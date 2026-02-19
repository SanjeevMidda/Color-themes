import { useState } from "react";
import "./index.css";

function App() {
  // colors
  // const colors = ["red", "blue", "green", "orange", "grey"];

  const colors = [
    {
      id: 1,
      color: "red",
    },
    {
      id: 2,
      color: "blue",
    },
    {
      id: 3,
      color: "green",
    },
    {
      id: 4,
      color: "orange",
    },
    {
      id: 5,
      color: "grey",
    },
  ];

  // state to hold color selected
  const [colorSelected, setColorSelected] = useState("white");

  return (
    <div className="App" style={{ backgroundColor: colorSelected }}>
      <div className="themeContainer">
        {colors.map((color) => {
          return (
            <button
              id={color.id}
              style={{ backgroundColor: color.color }}
              onClick={() => setColorSelected(color.color)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
