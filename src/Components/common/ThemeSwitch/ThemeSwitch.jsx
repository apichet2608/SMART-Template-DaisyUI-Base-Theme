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
  { label: "Lofi", value: "lofi" },
  { label: "Cupcake", value: "cupcake" },
  { label: "Corporate", value: "corporate" },
  { label: "Cyberpunk", value: "cyberpunk" },
  { label: "Aqua", value: "aqua" },
  { label: "Fantasy", value: "fantasy" },
  { label: "Wireframe", value: "wireframe" },
  { label: "Acid", value: "acid" },
  { label: "Lemonade", value: "lemonade" },
];

const darkThemes = [
  { label: "Dark", value: "dark" },
  { label: "Business", value: "business" },
  { label: "Dim", value: "dim" },
  { label: "Sunset", value: "sunset" },
  { label: "Dracula", value: "dracula" },
  { label: "Halloween", value: "halloween" },
  { label: "Forest", value: "forest" },
  { label: "Luxury", value: "luxury" },
  { label: "Black", value: "black" },
  { label: "Night", value: "night" },
  { label: "Coffee", value: "coffee" },
  { label: "Synthwave", value: "synthwave" },
];

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const allThemes = [...lightThemes, ...darkThemes];

  return (
    <div className="flex items-center space-x-2">
      <select
        id="theme-select"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="select select-bordered w-full max-w-xs select-sm"
      >
        <optgroup label="Light Themes">
          {lightThemes.map((themeOption) => (
            <option key={themeOption.value} value={themeOption.value}>
              {themeOption.label}
            </option>
          ))}
        </optgroup>
        <optgroup label="Dark Themes">
          {darkThemes.map((themeOption) => (
            <option key={themeOption.value} value={themeOption.value}>
              {themeOption.label}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};

export default ThemeSwitch;
