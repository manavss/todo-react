import { useEffect, useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="relative h-screen w-full bg-light-very-light-gray font-Josefin dark:bg-dark-very-dark-blue">
      <div className="h-[30vh] bg-mobile-light  bg-cover bg-no-repeat dark:bg-mobile-dark xs:bg-desktop-light  xs:dark:bg-desktop-dark"></div>
      <div className=" flex w-full  items-center justify-center">
        <Todo theme={theme} handleThemeSwitch={handleThemeSwitch} />
      </div>
    </div>
  );
}

export default App;
