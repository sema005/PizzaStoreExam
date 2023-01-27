import React, { useState, useEffect } from "react";

import ShoppingCartCard from "../cards/ShoppingCartCard";
import Delivery from "../Delivery";
import CartHeader from "../CartHeader";

function ShoppingCart({
  togglePopupCart,
  cartFood,
  setCartFood,
  togglePopupOrder,
  isCartOpen,
  setDeliverAdress,
}) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartEmpty, setIscartEmpty] = useState(false);

  const deleteFromCart = (cartId) => {
    setCartFood((prevState) => {
      return [...prevState.filter((item) => item.cartId !== cartId)];
    });
  };

  const checkIfCartIsEmpty = () => {
    if (cartFood.length > 0) {
      setIscartEmpty(true);
    } else {
      setIscartEmpty(false);
    }
  };

  useEffect(() => {
    checkIfCartIsEmpty();
    setTotalPrice(
      cartFood.reduce((total, item) => {
        return total + item.price;
      }, 0)
    );
  }, [cartFood]);

  return (
    <div className="text-white bottom-16 fixed  desktop:top-16 desktop:right-52  desktop:w-96 w-full ">
      <div className=" desktop:shoppingCart tablet:shoppingCart p-4 border-2 border-mainGreen  bg-mainBlue flex flex-col max-w-prose m-auto tablet:col-span-6 desktop:col-span-8 tablet:rounded-tr-full mobile:rounded-tr-full desktop:rounded-br-full desktop:rounded-bl-full tablet:rounded-tl-full mobile:rounded-tl-full desktop:right-96 desktop:top-16 dark:bg-darkModeElements">
        <div className="p-2 flex justify-center items-center relative">
          <CartHeader togglePopupCart={togglePopupCart} />
        </div>
        {isCartEmpty && (
          <div className="p-2 mb-10 h-96 overflow-scroll flex flex-col gap-2">
            <ShoppingCartCard
              cartFood={cartFood}
              deleteFromCart={deleteFromCart}
            />
          </div>
        )}
        {!isCartEmpty && (
          <div className="p-2 mb-10 h-96 overflow-scroll flex justify-center items-center overflow-x-hidden">
            <h1>Din handlevogn er tom, legg til mat du vil bestille</h1>
          </div>
        )}
        <div className="desktop:mb-0 tablet:mb-24 mobile:mb-24">
          <Delivery
            totalPrice={totalPrice}
            setDeliverAdress={setDeliverAdress}
          />
        </div>
        <div className="p-3 flex justify-center items-center mobile:hidden tablet:hidden ">
          <div
            onClick={togglePopupOrder}
            className=" bg-vipps w-32 h-32 rounded-circle border-8 border-white dark:border-darkModeBackGround flex justify-center items-center cursor-pointer"
          >
            <h1>Vipps</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
