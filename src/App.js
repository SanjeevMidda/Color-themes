import { useState } from "react";
import "./index.css";

const COLORS = [
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

function App() {
  const [selectedColor, setSelectedColor] = useState("white");

  return (
    <div className="App" style={{ backgroundColor: selectedColor }}>
      <div className="themeContainer">
        {COLORS.map((color) => {
          return (
            <button
              key={color.id}
              style={{ "--bg-color": color.color }}
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
