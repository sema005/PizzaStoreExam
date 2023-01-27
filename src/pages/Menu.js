import React, { useState, useEffect } from "react";
import Filters from "../components/Filters";
import TopLogo from "../components/TopLogo";
import MenuList from "../components/MenuList";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const [filter, setFilter] = useState("all");
  const props = useLocation().state;

  const checkIfFiltered = () => {
    if (props !== null) {
      setFilter(props.filter);
    }
  };
  useEffect(() => {
    checkIfFiltered();
  }, [props]);

  useEffect(
    (e) => {
      const allFilters = document.querySelectorAll(".filter");
      allFilters.forEach((filter) => {
        filter.classList.remove("active-filter");
      });
      const activeFilter = document.querySelector(`#${filter}`);
      activeFilter.classList.add("active-filter");
    },
    [filter]
  );

  return (
    <div className="mx-auto w-full dark:bg-darkModeBackGround h-screen">
      <TopLogo />
      <Filters setFilter={setFilter} props={props} />
      <MenuList filter={filter} />
    </div>
  );
};

export default Menu;
