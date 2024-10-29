import React, { useState } from "react";

const MovingButton = () => {
  const [position, setPosition] = useState({ top: 100, left: 100 });

  const handleMouseEnter = () => {
    // Randomly move the button to a new position
    const newTop = Math.floor(Math.random() * (window.innerHeight - 50)); // Adjust for button height
    const newLeft = Math.floor(Math.random() * (window.innerWidth - 100)); // Adjust for button width
    setPosition({ top: newTop, left: newLeft });
  };

  const handleClick = () => {
    alert("You caught me!");
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        transition: "top 0.2s, left 0.2s", // Add smooth transition
      }}
    >
      Try to Click Me!
    </button>
  );
};

export default MovingButton;
