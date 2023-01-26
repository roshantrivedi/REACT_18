import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../redux/store.js";
import HeadingComponent from "./HeadingComponent";
import ThemeContext from "../context/ThemeContext.js";

export default function AppLayout() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="main-container">
      <Provider store={store}>
        <HeadingComponent />
        <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
          <button onClick={changeTheme}>Surprise Me</button>
        <Outlet />
        </ThemeContext.Provider>
      </Provider>
    </div>
  );
}
