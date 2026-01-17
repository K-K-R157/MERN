import { createContext,useState} from "react"
import Welcome from "./Components/Welcome";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  const ThemeContext=createContext();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Welcome theme={theme}/>
      <ThemeToggle theme={theme}  toggleTheme={toggleTheme}/> 
    </>
  )
}

export default App
