import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MoonIcon,
  SunIcon,
  UserIcon,
  PhoneIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Navbar = ({
  togglePopupCart,
  togglePopupUser,
  isCartOpen,
  togglePopupOrder,
  addToCart,
  toggleDarkMode,
  isDarkMode,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const props = useLocation();
  return (
    <div className="bottom-0 w-full desktop:hidden z-50 fixed">
      <div className="h-16 w-full bg-mainBlue dark:bg-darkModeElements text-white flex tablet:justify-evenly justify-between items-center px-8 tablet:pr-48">
        <div className="flex tablet:w-1/2 tablet:justify-evenly">
          {!isDarkMode ? (
            <MoonIcon
              onClick={toggleDarkMode}
              className="cursor-pointer h-6 w-6"
            />
          ) : (
            <SunIcon
              onClick={toggleDarkMode}
              className="cursor-pointer h-6 w-6"
            />
          )}
          <UserIcon onClick={togglePopupUser} className="h-6 w-6 mx-2" />
        </div>
        <div className="flex tablet:w-1/2 tablet:justify-evenly">
          <Link to="/About">
            <PhoneIcon className="h-6 w-6 mx-2" />
          </Link>
          <ShoppingCartIcon
            onClick={togglePopupCart}
            className="h-6 w-6 mx-2"
          />
        </div>
        {location.pathname === "/" && (
          <div
            onClick={() => navigate("/menu")}
            className="absolute bg-mainGreen dark:border-darkModeBackGround w-32 h-32 rounded-circle bottom-6 right-1/2 tablet:right-28 transform translate-x-1/2 border-8 border-white flex justify-center items-center cursor-pointer"
          >
            Bestill mat
          </div>
        )}
         {location.pathname === "/About" && (
              <div onClick={()=>navigate("/")} className="absolute bg-mainGreen w-32 h-32 dark:border-darkModeBackGround rounded-circle bottom-6 right-1/2 tablet:right-28 transform translate-x-1/2 border-8 border-white flex justify-center items-center cursor-pointer">
              Hjem
            </div>
          
        )}
        {location.pathname === "/menu" && (
          <div
            onClick={togglePopupCart}
            className="absolute bg-mainGreen w-32 h-32 dark:border-darkModeBackGround rounded-circle bottom-6 right-1/2 tablet:right-28 transform translate-x-1/2 border-8 border-white flex justify-center items-center cursor-pointer"
          >
            Handlekurv
          </div>
        )}
        {location.pathname === "/editPizza" && (
          <div
            onClick={() => {
              navigate("/menu");
              addToCart(
                props.state.id,
                props.state.name,
                props.state.price,
                props.state.image,
                props.state.quantity
              );
            }}
            className="absolute bg-mainGreen w-32 h-32 dark:border-darkModeBackGround rounded-circle bottom-6 right-1/2 tablet:right-28 transform translate-x-1/2 border-8 border-white flex justify-center items-center cursor-pointer"
          >
            Legg til
          </div>
        )}
        {location.pathname === "/create-pizza" && (
          <div
            onClick={() => {
              navigate("/menu");
              addToCart(
                props.state.id,
                props.state.name,
                props.state.price,
                props.state.image,
                props.state.quantity
              );
            }}
            className="absolute bg-mainGreen w-32 h-32 dark:border-darkModeBackGround rounded-circle bottom-6 right-1/2 tablet:right-28 transform translate-x-1/2 border-8 border-white flex justify-center items-center cursor-pointer"
          >
            Legg til
          </div>
        )}
        {isCartOpen && (
          <div
            onClick={togglePopupOrder}
            className="absolute bg-vipps w-32 h-32 dark:border-darkModeBackGround rounded-circle bottom-6 right-1/2 tablet:right-28 transform translate-x-1/2 border-8 border-white flex justify-center items-center cursor-pointer"
          >
            <h1>Vipps</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
