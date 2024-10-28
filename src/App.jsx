import { ThemeProvider, createTheme } from "@mui/material/styles";
import MainContent from "./Components/common/MainContents/MainContent";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 534, // breakpoint xs
      sm: 640, // breakpoint sm
      md: 1072, // breakpoint md
      lg: 1340, // breakpoint lg
      xl: 1872, // breakpoint xl
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainContent />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
