import React from "react";
import data from "../data.json";
import MenuCard from "./cards/MenuCard";

const MenuList = ({ filter }) => {
  const allMenuItems = [...data.pizza, ...data.pasta, ...data.other];

  return (
    <div className="mt-8 mx-auto w-full dark:bg-darkModeBackGround flex justify-center items-center">
      <div className="grid desktop:grid-cols-4 tablet:grid-cols-2 grid-cols-1 desktop:gap-5 tablet:gap-5 gap-10 justify-center desktop:w-3/4 tablet:w-3/4">
        {allMenuItems.map((item) => {
          if (item.tags.includes(filter) || filter === "all") {
            return <MenuCard key={item.id} item={item} />;
          } else if (filter === "topsellers" && item.ratings >= 4) {
            return <MenuCard key={item.id} item={item} />;
          } else return null;
        })}
      </div>
    </div>
  );
};

export default MenuList;
