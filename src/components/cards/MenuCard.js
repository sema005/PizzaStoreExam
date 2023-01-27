import React from "react";
import { useNavigate } from "react-router-dom";

const MenuCard = ({ item }) => {
  const navigate = useNavigate();

  const toEditPizza = () => {
    if (item.name === "Lag din egen") {
      navigate("/create-pizza", {
        state: {
          id: item.id,
          name: item.name,
          image: item.image,
          contains: item.contains,
          allargies: item.allargies,
          price: item.price,
          tags: item.tags,
          quantity: item.quantity,
        },
      });
    } else {
      navigate("/editPizza", {
        state: {
          id: item.id,
          name: item.name,
          image: item.image,
          contains: item.contains,
          allargies: item.allargies,
          price: item.price,
          tags: item.tags,
          quantity: item.quantity,
        },
      });
    }
  };

  return (
    <div
      onClick={() => {
        toEditPizza();
      }}
      className="desktop:w-64 tablet:w-64 w-screen h-auto pb-4 px-4 bg-mainBlue dark:bg-darkModeElements rounded-md overflow-hidden flex justify-start items-center flex-col text-white hover:scale-95 transform transition-all duration-75 cursor-pointer text-center shadow-md"
    >
      <p className="text-md font-extrabold mt-4">{item.name}</p>
      <span className="h-0.5 w-3/4 bg-white my-2 opacity-50"></span>
      <img
        src={item.image}
        alt="product"
        className="w-full h-64 object-contain"
      ></img>

      <p className="text-sm">{item.id !== "000" ? item.contains : null}</p>
      <p className="font-extrabold">Fra kr: {item.price}</p>
    </div>
  );
};

export default MenuCard;
