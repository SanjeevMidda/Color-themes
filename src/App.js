import { useState } from "react";
import "./index.css";

const COLORS = ["red", "blue", "green", "orange", "grey"];

function App() {
  const [selectedColor, setSelectedColor] = useState("white");

  return (
    <div className="App" style={{ backgroundColor: selectedColor }}>
      <div className="themeContainer">
        {COLORS.map((c) => {
          return (
            <button
              key={c}
              style={{ "--bg-color": c }}
              onClick={() => setSelectedColor(c)}
              aria-label={`Select ${c.color} theme`}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
