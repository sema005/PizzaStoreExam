import React, { useState } from "react";

const Delivery = ({ totalPrice, setDeliverAdress }) => {
  const [isHome, setIsHome] = useState("deliverHome");

  const changeIsHome = () => {
    let selectedDelivery = document.getElementById("delivery");
    if (selectedDelivery.value === "deliverHome") {
      setIsHome("deliverHome");
    } else {
      setIsHome("pickupInStore");
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center text-white">
      <form id="orderDetails">
        <label htmlFor="delivery">Leveringsmåte:</label>
        <select
          className="bg-mainBlue cursor-pointer border-mainGreen dark:bg-darkModeElements border-3 outline-none "
          name="delivery"
          id="delivery"
          required
          onChange={(e) => changeIsHome()}
        >
          <option
            value="deliverHome"
            className="bg-mainBlue border-2 border-mainGreen dark:bg-darkModeElements"
          >
            Hjem
          </option>
          <option
            value="pickupInStore"
            className="bg-mainBlue border-2 border-mainGreen dark:bg-darkModeElements"
          >
            Hent i butikk
          </option>
        </select>
      </form>
      <div className="flex flex-row gap-2 mobile:flex-col desktop:flex-col">
        {isHome === "deliverHome" && (
          <input
            placeholder="Adresse"
            name="adress"
            type="text"
            alt="Skriv in adressen din"
            className="text-center border-2 rounded-md border-mainGreen bg-mainBlue dark:bg-darkModeElements outline-none h-11 w-52"
            required
            onChange={(e) => setDeliverAdress(e.target.value)}
          />
        )}
        <input
          name="price"
          value={"Totalt " + totalPrice + "kr"}
          type="text"
          readOnly
          className="text-center border-2 rounded-md border-mainGreen bg-mainBlue dark:bg-darkModeElements outline-none h-11 w-52"
        />
      </div>
    </div>
  );
};

export default Delivery;
