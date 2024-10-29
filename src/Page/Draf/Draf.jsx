import React, { useState } from "react";

const MovingButton = () => {
  const [position, setPosition] = useState({ top: 100, left: 100 });

  const handleMouseEnter = () => {
    const newTop = Math.floor(Math.random() * (window.innerHeight - 50));
    const newLeft = Math.floor(Math.random() * (window.innerWidth - 100));
    setPosition({ top: newTop, left: newLeft });
  };

  const handleClick = () => {
    alert("You caught me!");
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      className="absolute px-4 py-2 text-white bg-blue-600 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      Try to Click Me!
    </button>
  );
};

export default MovingButton;
