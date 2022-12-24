import { useState } from "react";
import { Outlet } from "react-router-dom";

import HeadingComponent from "./HeadingComponent";
import ThemeContext from "../context/ThemeContext.js";

export default function AppLayout() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="main-container">
      <HeadingComponent />
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <button onClick={changeTheme}>Surprise Me</button>
        <Outlet />
      </ThemeContext.Provider>
    </div>
  );
}
