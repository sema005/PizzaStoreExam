import QuantityButtons from "../QuantityButtons";

import { XIcon, PencilIcon } from "@heroicons/react/solid";

function ShoppingCartCard({ deleteFromCart, cartFood }) {
  return (
    <>
      {cartFood.map((item, i) => {
        return (
          <div key={i} className="shoppingCartCard relative p-2 text-white ">
            <div className="relative text-center mobile:text-left desktop:text-left">
              <p className="text-xl mobile:text-sm mobile:w-48">{item.name}</p>
              <div>
                <XIcon
                  onClick={(i) => {
                    deleteFromCart(item.cartId);
                  }}
                  className="cursor-pointer absolute right-2 top-0 w-6 h-6"
                />
                <PencilIcon className="absolute right-8 top-0 w-6 h-6  desktop:right-9" />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="w-36 h-36 mobile:w-20 mobile:h-20 desktop:w-20 desktop:h-20">
                <img
                  className=" object-cover w-full h-full"
                  src={item.image}
                  alt="What's inside shopping cart"
                />
              </div>
              <div className="text-xl absolute left-40 bottom-2 mobile:text-sm desktop:text-sm mobile:left-24 desktop:left-24 border-2 border-mainGreen rounded-full p-2">
                <p className="">{item.price}kr</p>
              </div>
            </div>
            <div className="absolute right-7 bottom-2">
              <QuantityButtons number={item.quantity} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ShoppingCartCard;
