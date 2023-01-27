import React from "react";
import { UserIcon, ShoppingCartIcon, PhoneIcon } from "@heroicons/react/solid";
import Switch from "./Switch";
import logoPic from "../images/logoDesktop-t.png";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

const DesktopNavbar = ({
  togglePopupCart,
  togglePopupUser,
  toggleDarkMode,
  isDarkMode,
}) => {
  return (
    <div className="hidden desktop:inline-block w-screen h-16 bg-mainBlue dark:bg-darkModeElements fixed top-0 z-50">
      <div className="flex justify-center items-center h-full w-full text-white text-2xl">
        <Link to="/">
          <div className="flex justify-center items-center">
            <img src={logoPic} alt="logo" className="h-8 mr-2" />
            <h1>PIZZERIA BELLA</h1>
          </div>
        </Link>
        <div className="flex absolute right-16 w-72 justify-between">
          <ShoppingCartIcon
            onClick={togglePopupCart}
            className="w-8 h-8 cursor-pointer"
          />
          <UserIcon
            onClick={togglePopupUser}
            className="w-8 h-8 cursor-pointer"
          />
          <Link to="/About">
            <PhoneIcon className="h-8 w-8 cursor-pointer" />
          </Link>
          <div className="flex justify-center items-center">
            <SunIcon className="h-6 w-6" />
            <Switch onToggle={toggleDarkMode} isToggled={isDarkMode} />
            <MoonIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
