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

  return (
    <div onChange={(e) => setTheme(e.target.value)} className="dropdown mx-1">
      <div tabIndex={0} role="button" className="btn">
        Theme
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul className="dropdown-content z-[1] p-2 shadow-2xl bg-primary-content text-primary rounded-box grid gap-2 overflow-y-auto max-h-[600px] custom-scrollbar">
        <li>
          <label>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={"Default"}
              value={"default"}
              defaultChecked={theme === "default"}
            />
          </label>
        </li>
        <div className="divider divider-accent text-accent text-xs font-bold">
          <Brightness4Icon />
        </div>
        {/* Light Themes */}
        {lightThemes.map((themeOption) => (
          <li key={themeOption.value}>
            <label>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label={themeOption.label}
                value={themeOption.value}
                defaultChecked={theme === themeOption.value}
              />
            </label>
          </li>
        ))}

        <div className="divider divider-accent text-accent text-xs font-bold">
          <NightsStayIcon />
        </div>
        {/* Dark Themes */}
        {darkThemes.map((themeOption) => (
          <li key={themeOption.value}>
            <label>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label={themeOption.label}
                value={themeOption.value}
                defaultChecked={theme === themeOption.value}
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitch;
