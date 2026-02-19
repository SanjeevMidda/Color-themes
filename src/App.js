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
        {COLORS.map((c) => {
          return (
            <button
              key={c.id}
              style={{ "--bg-color": c.color }}
              onClick={() => setSelectedColor(c.color)}
              aria-label={`Select ${c.color} theme`}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
