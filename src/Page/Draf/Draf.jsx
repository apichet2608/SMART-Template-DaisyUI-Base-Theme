import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const lightThemes = [
  { label: "Fuji", value: "Fuji" },
  { label: "Light", value: "light" },
  { label: "Retro", value: "retro" },
  { label: "Winter", value: "winter" },
  { label: "Autumn", value: "autumn" },
  { label: "Nord", value: "nord" },
  { label: "Valentine", value: "valentine" },
  { label: "Bumblebee", value: "bumblebee" },
  { label: "Emerald", value: "emerald" },
  { label: "Garden", value: "garden" },
  { label: "Pastel", value: "pastel" },
  { label: "Cmyk", value: "cmyk" },
  { label: "lofi", value: "lofi" },
];

const darkThemes = [
  { label: "Dark", value: "dark" },
  { label: "Dim", value: "dim" },
  { label: "Night", value: "night" },
  { label: "Dracula", value: "dracula" },
  { label: "Halloween", value: "halloween" },
  { label: "Forest", value: "forest" },
  { label: "Luxury", value: "luxury" },
];

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

  // Handle theme change from the dropdown
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className="grid mx-2 text-base-content">
      <article className="prose">
        <h1>Current Theme: {theme}</h1>

        <label htmlFor="theme-selector" className="block mt-2">
          Select Theme:
        </label>
        <select
          id="theme-selector"
          value={theme}
          onChange={handleThemeChange}
          className="mt-1 p-2 border border-gray-300 rounded"
        >
          {/* Render light themes */}
          {lightThemes.map((lightTheme) => (
            <option key={lightTheme.value} value={lightTheme.value}>
              {lightTheme.label}
            </option>
          ))}
          {/* Render dark themes */}
          {darkThemes.map((darkTheme) => (
            <option key={darkTheme.value} value={darkTheme.value}>
              {darkTheme.label}
            </option>
          ))}
        </select>

        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Type your draft here..."
          className="w-full p-2 border border-gray-300 rounded mt-2"
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
