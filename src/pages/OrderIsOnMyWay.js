import React from "react";
import { EmojiHappyIcon, XIcon } from "@heroicons/react/solid";
import CountDownTimer from "../components/CountDownTimer";
const OrderIsOnMyWay = ({ togglePopupOrder, deliverAdress }) => {
  let TimeIsUp = () => {
    alert("Maten din er ferdig");
  };

  return (
    <div className="text-white bottom-16 fixed  desktop:top-16 desktop:right-52  desktop:w-96 w-full ">
      <div className=" border-2 border-mainGreen bg-mainBlue dark:bg-darkModeElements dark:text-white tablet:col-span-6 max-w-prose m-auto desktop:col-span-8 tablet:rounded-tr-full mobile:rounded-tr-full desktop:rounded-br-full desktop:rounded-bl-full tablet:rounded-tl-full mobile:rounded-tl-full desktop:right-96 desktop:top-16 ">
        <XIcon
          onClick={togglePopupOrder}
          fill="white"
          className="absolute cursor-pointer right-10 desktop:mt-4 w-8 h-8 tablet:mr-14 tablet:mt-4"
        />
        <div className="mb-10 flex justify-center items-center flex-col">
          <div className="w-20 h-20 flex m-5">
            <EmojiHappyIcon fill="#4DD69A" />
          </div>
          {deliverAdress === "" && (
            <div className="text-2xl">
              <h2>Maten din er lagt i produksjon</h2>
              <p>Hent maten i butikken</p>
            </div>
          )}
          {deliverAdress !== "" && (
            <div>
              <h2>Maten din er på vei til din adresse: </h2>
              <p>{deliverAdress}</p>
            </div>
          )}
        </div>
        <div className=" border-2 border-mainGreen m-10 tablet:ml-40 tablet:mr-40 rounded-full flex justify-center items-center mb-32 text-2xl">
          <p>Maten er klar om:</p>
          <div className="ml-2">
            <CountDownTimer TimeIsUp={TimeIsUp} duration={1000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderIsOnMyWay;
