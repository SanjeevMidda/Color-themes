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
  const [selectedColor, setSelectedColor] = useState("white");

  return (
    <div className="App" style={{ backgroundColor: selectedColor }}>
      <div className="themeContainer">
        {colors.map((color) => {
          return (
            <button
              key={color.id}
              style={{ backgroundColor: color.color }}
              onClick={() => setSelectedColor(color.color)}
              aria-label={`Select ${color.color} theme`}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
