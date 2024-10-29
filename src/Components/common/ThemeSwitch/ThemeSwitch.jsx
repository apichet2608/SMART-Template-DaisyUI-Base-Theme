import { useTheme } from "next-themes";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import NightsStayIcon from "@mui/icons-material/NightsStay";

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

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  // Combine light and dark themes for select options
  const allThemes = [
    ...lightThemes.map((themeOption) => ({ ...themeOption, type: "light" })),
    ...darkThemes.map((themeOption) => ({ ...themeOption, type: "dark" })),
  ];

  return (
    <div className="mx-1">
      <label htmlFor="theme-select" className="flex items-center">
        <span className="mr-2">Theme</span>
        <Brightness4Icon className="hidden md:inline" />
        <NightsStayIcon className="hidden md:inline" />
      </label>
      <select
        id="theme-select"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      >
        {allThemes.map((themeOption) => (
          <option key={themeOption.value} value={themeOption.value}>
            {themeOption.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSwitch;
