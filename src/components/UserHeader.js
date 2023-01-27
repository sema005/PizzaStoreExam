import React from "react";
import { XIcon } from "@heroicons/react/solid";

function CartHeader({ togglePopupUser }) {
  return (
    <>
      <h1 className="text-white text-center mobile:text-1x1 tablet:text-3xl desktop:text-3xl">
       
      </h1>
      <XIcon
        onClick={togglePopupUser}
        fill="white"
        className="absolute right-5 top-5 w-8 h-8 "
      />
    </>
  );
}

export default CartHeader;