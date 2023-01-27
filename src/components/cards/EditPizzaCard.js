import React from "react";
import QuantityButtons from "../QuantityButtons";
import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

function EditPizzaCard({ item, checkFoodType }) {
  let contains = [item[0].contains.split(",")];
  const navigate = useNavigate();

  const getBackToMenu = () => {
    navigate("/menu");
  };

  

  return (
    <div className="flex flex-col p-3 gap-4  items-center desktop:text-2xl">
      <div className="absolute left-3 top-4 w-14 h-14">
        <ArrowNarrowLeftIcon onClick={() => getBackToMenu()} />
      </div>
      <h1 className="text-lg tablet:text-4xl font-extrabold desktop:text-4xl">
        Endre din {checkFoodType()}
      </h1>
      {checkFoodType() === "pasta" ? null : (
        <div className=" flex flex-row gap-2">
          <label htmlFor="size">Størrelse </label>
          <select
            name="size"
            className="bg-mainBlue outline-none dark:bg-darkModeElements"
          >
            <option className="tablet:text-base desktop:text-lg">Liten</option>
            <option className="tablet:text-base desktop:text-lg">Medium</option>
            <option className="tablet:text-base desktop:text-lg">Stor</option>
          </select>
        </div>
      )}
      <div className="flex flex-col w-3/4 tablet:w-1/2 desktop:w-2/6 ">
        {contains[0].map((i) => (
          <div className="flex justify-between" key={i}>
            <p>{i}</p>
            <QuantityButtons number={1} elementId={i + `count`} />
          </div>
        ))}
        <div className="flex gap-11 w-full mt-4">
          <div className="flex justify-between w-full">
            <p>Antall:</p>
            <QuantityButtons
              number={item[0].quantity}
              elementId={"quantityCount"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPizzaCard;
