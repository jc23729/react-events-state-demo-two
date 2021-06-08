import React from "react";

const ButtonGroup = () => {
  const printColor = (color) => {
    console.log(`YOU CLICKED: ${color.toUpperCase()}`)
  }
  return (
    <div>
      {/* printcolor is a new function, prebaked in and call and execute some argument */}
      <button onClick={() => printColor('Red')}>Red</button>
      <button onClick={() => printColor('Yellow')}>Yellow</button>
      <button onClick={() => printColor('Green')}>Green</button>
    </div>
  )
}

export default ButtonGroup;