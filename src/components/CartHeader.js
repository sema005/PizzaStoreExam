import React from "react";
import { XIcon } from "@heroicons/react/solid";

function CartHeader({ togglePopupCart }) {
  return (
    <>
      <h1 className="text-white text-center mobile:text-1x1 tablet:text-3xl desktop:text-2xl">
        Din Handlekurv
      </h1>
      <XIcon
        onClick={togglePopupCart}
        fill="white"
        className="absolute right-5 w-8 h-8 cursor-pointer"
      />
    </>
  );
}

export default CartHeader;
