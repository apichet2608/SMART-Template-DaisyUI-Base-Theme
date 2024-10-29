// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "534px", // pc dev
      md: "640px", // Tablet M9 แนวตั้ง M9-2
      lg: "1072px", // Tablet M9 แนวนอน M9
      xl: "1280px",
      "2xl": "1872px", //pc dev
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem",
      },
    },
    fontFamily: {
      Poppins: ['"Poppins"', "sans-serif"],
      PressStart2P: ['"Press Start 2P"', "sans-serif"],
      Inter: ['"Inter Variable"', "sans-serif"],
    },
  },
  darkMode: "class",
  plugins: [
    require("daisyui"),
    nextui({}),
    require("tailwindcss-animated"),
    require("@tailwindcss/typography"),
  ],
  daisyui: {
    themes: [
      {
        Fuji: {
          primary: "#007bff", // ใช้ฟ้าเข้มกว่าเล็กน้อย
          "primary-content": "#ffffff", // เนื้อหาสีขาว
          secondary: "#6c757d", // ยังคงเป็นโทนสีเทา
          "secondary-content": "#ffffff", // เนื้อหาสีขาว
          accent: "#00bcd4", // เปลี่ยน accent เป็นฟ้าสดใส (cyan)
          "accent-content": "#ffffff", // เนื้อหาสีขาว
          neutral: "#495057", // สีเทาเข้มขึ้นสำหรับ neutral
          "neutral-content": "#ffffff", // เนื้อหาสีขาว
          "base-100": "#f8f9fa", // สีพื้นฐานขาวเทาอ่อน
          "base-200": "#e9ecef", // สีพื้นฐานขาวเทาเข้มขึ้น
          "base-300": "#dee2e6", // ขาวเทาอีกระดับ
          "base-content": "#212529", // เนื้อหาเป็นสีดำเทาเข้ม
          info: "#17a2b8", // สีฟ้าสดใส (cyan)
          "info-content": "#ffffff", // เนื้อหาสีขาว
          success: "#28a745", // ใช้เขียวที่สดใสขึ้น
          "success-content": "#ffffff", // เนื้อหาสีขาว
          warning: "#ffc107", // สีเหลืองแบบอุ่น
          "warning-content": "#212529", // เนื้อหาสีดำเทา
          error: "#dc3545", // สีแดงสด (เดิม)
          "error-content": "#ffffff", // เนื้อหาสีขาว
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
    //   // darkTheme: "dark", // name of one of the included themes for dark mode
    //   // base: true, // applies background color and foreground color for root element by default
    //   // styled: true, // include daisyUI colors and design decisions for all components
    //   // utils: true, // adds responsive and modifier utility classes
    //   // prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    //   // logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    //   // themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
