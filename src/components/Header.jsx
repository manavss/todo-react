/* eslint-disable react/prop-types */
import React from "react";
import IconMoon from "../assets/images/icon-moon.svg";
import IconSun from "../assets/images/icon-sun.svg";
function Header({ theme, handleThemeSwitch }) {
  return (
    <div className="flex justify-between">
      <h1 className=" text-3xl  font-bold tracking-[0.4rem] text-white">
        TODO
      </h1>
      <button onClick={handleThemeSwitch}>
        {theme === "light" ? (
          <img src={IconMoon} alt="darkmode" />
        ) : (
          <img src={IconSun} alt="lightmode" />
        )}
      </button>
    </div>
  );
}

export default React.memo(Header);
