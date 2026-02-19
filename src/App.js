import { useState } from "react";
import "./index.css";

const COLORS = ["red", "blue", "green", "orange", "grey"];

function App() {
  const [selectedColor, setSelectedColor] = useState("white");

  return (
    <div className="App" style={{ backgroundColor: selectedColor }}>
      <div className="themeContainer">
        {COLORS.map((c) => (
          <button
            key={c}
            style={{ "--bg-color": c }}
            onClick={() => setSelectedColor(c)}
            aria-label={`Select ${c} theme`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default App;
