import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function Draf() {
  const [text, setText] = useState("");
  const { theme, setTheme } = useTheme();

  // Load the stored value from localStorage when the component mounts
  useEffect(() => {
    const storedText = localStorage.getItem("draftText");
    if (storedText) {
      setText(storedText);
    }
  }, []);

  // Save the text to localStorage whenever it changes
  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    localStorage.setItem("draftText", newText);
  };

  // Clear localStorage
  const handleClear = () => {
    setText("");
    localStorage.removeItem("draftText");
  };

  return (
    <div className="grid mx-2 text-base-content">
      <article className="prose">
        <h1>{theme}</h1>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Type your draft here..."
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleClear}
          className="mt-2 p-2 bg-red-500 text-white rounded"
        >
          Clear Draft
        </button>
      </article>
    </div>
  );
}

export default Draf;
