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
          // primary: "#0056b3",
          // "primary-content": "#ffffff",
          // secondary: "#6c757d",
          // "secondary-content": "#ffffff",
          // accent: "#17a2b8",
          // "accent-content": "#ffffff",
          // neutral: "#343a40",
          // "neutral-content": "#ffffff",
          // "base-100": "#ffffff",
          // "base-200": "#f8f9fa",
          // "base-300": "#e9ecef",
          // "base-content": "#212529",
          // info: "#0dcaf0",
          // "info-content": "#000000",
          // success: "#198754",
          // "success-content": "#ffffff",
          // warning: "#ffc107",
          // "warning-content": "#000000",
          // error: "#dc3545",
          // "error-content": "#ffffff",

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

          //----------------------------------------------------------------------------------------------//
          // primary: "#004085", // A darker blue for a more professional look
          // "primary-content": "#ffffff", // White text for contrast
          // secondary: "#6c757d", // A neutral, soft gray
          // "secondary-content": "#ffffff", // White for secondary content text
          // accent: "#0069d9", // A balanced blue accent for highlights
          // "accent-content": "#ffffff", // White accent content text
          // neutral: "#3c3f41", // Darker neutral for depth
          // "neutral-content": "#f8f9fa", // Lighter text on neutral
          // "base-100": "#f4f6f8", // Light gray base for backgrounds
          // "base-200": "#e9ecef", // Slightly darker gray for components
          // "base-300": "#dee2e6", // Darker still for borders and dividers
          // "base-content": "#343a40", // Dark gray for text content
          // info: "#138496", // Muted teal for informational elements
          // "info-content": "#ffffff", // White for info text
          // success: "#28a745", // Subdued green for success notifications
          // "success-content": "#ffffff", // White success content
          // warning: "#ffc107", // Slightly less bright yellow for warnings
          // "warning-content": "#000000", // Black text for warnings
          // error: "#dc3545", // Standard red for errors
          // "error-content": "#ffffff", // White error text
          //----------------------------------------------------------------------------------------------//

          //----------------------------------------------------------------------------------------------//
          // primary: "#6a0dad", // Deep purple for a magical, fantasy feel
          // "primary-content": "#ffffff", // White for contrast on primary elements
          // secondary: "#2e8b57", // Emerald green for a natural, fantasy tone
          // "secondary-content": "#ffffff", // White for readability on secondary elements
          // accent: "#ff4500", // Bright fiery orange for striking accents
          // "accent-content": "#ffffff", // White accent text
          // neutral: "#2f4f4f", // Dark slate gray for a mysterious atmosphere
          // "neutral-content": "#e0e0e0", // Light content on dark backgrounds
          // "base-100": "#faf3f3", // Soft, misty white for a fantasy base
          // "base-200": "#dcdcdc", // Light gray for additional depth
          // "base-300": "#b0c4de", // Light steel blue for subtle highlights
          // "base-content": "#4b0082", // Indigo for deep text content
          // info: "#4682b4", // Steel blue for calm, yet mystical information
          // "info-content": "#ffffff", // White text for info
          // success: "#32cd32", // Vivid lime green for magical success elements
          // "success-content": "#ffffff", // White for success content text
          // warning: "#ffcc00", // Bright gold for warnings
          // "warning-content": "#000000", // Black text for warnings
          // error: "#b22222", // Firebrick red for errors with intensity
          // "error-content": "#ffffff", // White text for errors
          //----------------------------------------------------------------------------------------------//

          //----------------------------------------------------------------------------------------------//
          // primary: "#4b0082", // Deep indigo, like the signature purple of Evangelion units
          // "primary-content": "#ffffff", // White for contrast on primary elements
          // secondary: "#00ff00", // Neon green for a tech-inspired, futuristic feel
          // "secondary-content": "#000000", // Black for contrast on neon green
          // accent: "#ff4500", // Fiery orange, representing danger or emergency
          // "accent-content": "#ffffff", // White for accent text
          // neutral: "#1c1c1c", // Dark neutral black for a futuristic, high-tech look
          // "neutral-content": "#e0e0e0", // Light gray for readability on dark backgrounds
          // "base-100": "#ffffff", // Clean white base for a stark contrast
          // "base-200": "#d3d3d3", // Light gray for additional structure
          // "base-300": "#808080", // Medium gray for subtler elements
          // "base-content": "#4b0082", // Deep indigo for primary text elements
          // info: "#00bfff", // Bright sky blue for informational elements, akin to tech screens
          // "info-content": "#ffffff", // White for info text
          // success: "#00ff7f", // Bright green for success, evoking an otherworldly feel
          // "success-content": "#000000", // Black text for success messages
          // warning: "#ffd700", // Bold yellow for warnings
          // "warning-content": "#000000", // Black text for warnings
          // error: "#ff0000", // Vivid red for errors, matching the intensity of the series
          // "error-content": "#ffffff", // White for error text
          //----------------------------------------------------------------------------------------------//
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
