import React from "react";
import { Link } from "react-router-dom";
import TopLogo from "../components/TopLogo";
import pizzaImg from "../images/pizzaMargerita.png";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();

  const makePizzaFilter = () => {
    navigate("menu", {
      state: {
        filter: "pizza",
      },
    });
  };
  const makePastaFilter = () => {
    navigate("menu", {
      state: {
        filter: "pasta",
      },
    });
  };

  return (
    <div>
      <div className="ml-36 mt-8 mobile:hidden tablet:hidden">
        <Link to="/menu">
          <div className=" absolute text-white text-2xl bg-mainGreen dark:border-darkModeBackGround w-44 h-44 rounded-circle border-8 border-white flex justify-center items-center">
            Bestill mat
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-start items-center desktop:mt-16 h-screen dark:bg-darkModeBackGround">
        <TopLogo />
        <div className="desktop:w-3/4 tablet:w-11/12 w-full mx-auto grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 rounded-lg overflow-hidden desktop:mt-8 gap-2">
          <div className="col-span-1 tablet:col-span-2 desktop:col-span-3 bg-mainBlue dark:bg-darkModeElements h-auto text-center text-white flex flex-col justify-center items-center">
            <p className="my-4 text-3xl font-extralight">
              VI LEVERER <br />
              <span className="font-extrabold">RYKENDE FERSK</span>
              <br /> PIZZA HJEM TIL DEG!
            </p>
            <div className="flex justify-center items-center overflow-hidden h-72">
              <img
                src={pizzaImg}
                alt=""
                className="object-cover relative w-11/12 desktop:top-96 tablet:top-48 top-12 desktop:max-w-6xl max-w-2xl"
              />
            </div>
          </div>
          <div onClick={() => makePizzaFilter()} className="order-element">
            Bestill Pizza
          </div>
          <Link to="/menu">
            <div className="order-element">Se vår meny</div>
          </Link>
          <div onClick={() => makePastaFilter()} className="order-element">
            Bestill Pasta
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
