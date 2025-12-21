import { createContext } from "react"
import Welcome from "./Components/Welcome";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  const ThemeContext=createContext();

  return (
    <>
      <Welcome/>
      <ThemeToggle/>
    </>
  )
}

export default App
