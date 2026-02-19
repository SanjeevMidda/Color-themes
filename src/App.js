import { useState } from "react";
import "./index.css";

function App() {
  // colors
  const colors = ["red", "blue", "green", "orange", "grey"];

  // state to hold color selected
  const [colorSelected, setColorSelected] = useState("white");

  return (
    <div className="App" style={{ backgroundColor: colorSelected }}>
      <div className="themeContainer">
        {colors.map((color) => {
          return (
            <button
              style={{ backgroundColor: color }}
              onClick={() => setColorSelected(color)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
