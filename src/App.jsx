import React from "react";
import ReactDOM from "react-dom/client";
import ColorPicker from "./components/ColorPicker";

import "./index.css";
import { useColors } from "./hooks/useColors";

const App = () => {
  const {color, handleChangeColor, handleSubmitButtonColor} = useColors();
  return (
  <div className="container">
    < ColorPicker
      color = {color }
      handleChangeColor = {handleChangeColor} 
      handleSubmitButtonColor = {handleSubmitButtonColor}
    />
  </div>
  );

}
  
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)