import React from "react";
import logoPic from "../images/logo-t.png";
import { Link } from "react-router-dom";

const TopLogo = () => {
  return (
    <Link to="/">
      <div className="desktop:hidden flex justify-center items-center pt-4 mb-4 dark:text-white">
        <img src={logoPic} alt="logo" className="h-12" />
        <h1>PIZZERIA BELLA</h1>
      </div>
    </Link>
  );
};

export default TopLogo;
