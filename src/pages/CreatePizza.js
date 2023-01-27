import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePizza.css";

export const CreatePizza = ({ addToCart }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const checkboxClickHandler = (e) => {
    if (!selectedItems.includes(e.target.name)) {
      setSelectedItems([e.target.name, ...selectedItems]);
    } else {
      setSelectedItems([
        ...selectedItems.filter((val) => val !== e.target.name),
      ]);
    }
  };

  const handleSubmit = () => {
    console.log(selectedItems);
    let totalPrice = 0;
    let nrOfToppings = 0;
    let nrOfCheese = 0;
    selectedItems.forEach((item) => {
      if (item.startsWith("size")) {
        switch (item.substring(4)) {
          case "Small":
            totalPrice += 129;
            break;
          case "Medium":
            totalPrice += 159;
            break;
          case "Large":
            totalPrice += 189;
            break;
          default:
            break;
        }
      }
      if (item.startsWith("cheese")) {
        nrOfCheese++;
        if (nrOfCheese > 1) {
          totalPrice += 15;
        }
      }
      if (item.startsWith("topping")) {
        nrOfToppings++;
        if (nrOfToppings >= 3) {
          totalPrice += 10;
        }
      }
    });
    addToCart(
      "000",
      "Lag din egen",
      totalPrice,
      "https://thebigone.dominos.com.au/images/whole-pizza.png",
      1
    );
    navigate("/menu");
  };

  return (
    <div className="dark:bg-darkModeBackGround">
      <form name="størrelse" className="form">
        <div className="desktop:w-3/4 tablet:w-11/12 w-full mx-auto grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 rounded-lg overflow-hidden desktop:mt-8 gap-2">
          <div className="col-span-1 tablet:col-span-2 desktop:col-span-3 bg-mainBlue dark:bg-darkModeElements py-10 mt-16 rounded-lg h-auto text-center text-white flex flex-col justify-center items-center">
            <h1 className="mb-6 pt-6 mx-auto text-center"> VELG STØRRELSE</h1>
            <div className="mx-auto max-w-sm text-center flex flex-wrap justify-center">
              <div className="object-left mr-4 mb-4">
                <input
                  id="radio1"
                  type="checkbox"
                  name="sizeSmall"
                  className="hidden"
                  onClick={checkboxClickHandler}
                />
                <label
                  htmlFor="radio1"
                  className="flex items-center cursor-pointer px-3"
                >
                  <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                  LITEN
                </label>
                <label>129,-</label>
              </div>

              <div className="object-center mr-4 mb-4">
                <input
                  id="radio2"
                  type="checkbox"
                  name="sizeMedium"
                  className="hidden"
                  onClick={checkboxClickHandler}
                />
                <label
                  htmlFor="radio2"
                  className="flex items-center cursor-pointer px-3"
                >
                  <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                  MEDIUM
                </label>
                <label>159,-</label>
              </div>

              <div className="object-right mr-4 mb-4">
                <input
                  id="radio3"
                  type="checkbox"
                  name="sizeLarge"
                  className="hidden"
                  onClick={checkboxClickHandler}
                />
                <label
                  htmlFor="radio3"
                  className="flex items-center cursor-pointer px-3"
                >
                  <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                  STOR
                </label>{" "}
                <label>189,-</label>
              </div>
            </div>
          </div>
        </div>
      </form>

      <form name="Bunn" className="form">
        <div className="desktop:w-3/4 tablet:w-11/12 w-full mx-auto grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 rounded-lg overflow-hidden desktop:mt-8 gap-2">
          <div className="col-span-1 tablet:col-span-2 desktop:col-span-3 bg-mainBlue dark:bg-darkModeElements py-10 h-auto text-center text-white flex flex-col justify-center items-center">
            <h1 className="mb-6 pt-6 mx-auto text-center"> VELG BUNN</h1>
            <div className="mx-auto max-w-sm text-center flex flex-wrap justify-center">
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio4"
                  type="checkbox"
                  name="bottomItalian"
                  className="hidden"
                  onClick={checkboxClickHandler}
                />
                <label
                  htmlFor="radio4"
                  className="flex items-center cursor-pointer px-3"
                >
                  <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                  ITALIENSK
                </label>{" "}
              </div>

              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio5"
                  type="checkbox"
                  name="bottomAmerican"
                  className="hidden"
                  onClick={checkboxClickHandler}
                />
                <label
                  htmlFor="radio5"
                  className="flex items-center cursor-pointer px-3"
                >
                  <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                  AMERIKANSK
                </label>{" "}
              </div>
            </div>
          </div>
        </div>
      </form>

      <form name="ost" className="form">
        <div className="desktop:w-3/4 tablet:w-11/12 w-full mx-auto grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 rounded-lg overflow-hidden desktop:mt-8 gap-2">
          <div className="col-span-1 tablet:col-span-2 desktop:col-span-3 bg-mainBlue dark:bg-darkModeElements py-10 h-auto text-center text-white flex flex-col justify-center items-center">
            <h1 className="pt-6 mx-auto text-center"> VELG OST</h1>
            <p className="opacity-50 text-xs mb-6">
              (Første ost gratis, deretter kr 15,-)
            </p>
            <div className="mx-auto max-w-sm text-center flex flex-wrap justify-center">
              <div className="object-left mr-10">
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio6"
                    type="checkbox"
                    name="cheeseCheddar"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio6"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    CHEDDAR
                  </label>{" "}
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio7"
                    type="checkbox"
                    name="cheeseJarlsberg"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio7"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    JARLSBERG
                  </label>{" "}
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio8"
                    type="checkbox"
                    name="cheeseVegan"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio8"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    VEGAN
                  </label>{" "}
                </div>
              </div>
              <div className="object-right">
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio9"
                    type="checkbox"
                    name="cheeseMozzarella"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio9"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    MOZZARELLA
                  </label>{" "}
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio10"
                    type="checkbox"
                    name="cheeseParmasan"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio10"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    PARMASAN
                  </label>{" "}
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio11"
                    type="checkbox"
                    name="CheeseNorvegia"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio11"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    NORVEGIA
                  </label>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <form name="Topping" className="form">
        <div className="desktop:w-3/4 tablet:w-11/12 w-full mx-auto grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 rounded-lg overflow-hidden desktop:mt-8 gap-2">
          <div className="col-span-1 tablet:col-span-2 desktop:col-span-3 bg-mainBlue dark:bg-darkModeElements py-10 mb-10 rounded-lg h-auto text-center text-white flex flex-col justify-center items-center">
            <h1 className="pt-6 mx-auto text-center"> VELG TOPPING</h1>
            <p className="opacity-50 text-xs mb-6">
              (Første 2 toppinger gratis, deretter kr 10,-/pr topping)
            </p>
            <div className="mx-auto max-w-sm text-center flex flex-wrap justify-center">
              <div className="object-left mr-10">
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio12"
                    type="checkbox"
                    name="toppingBacon"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio12"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    BACON
                  </label>{" "}
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio13"
                    type="checkbox"
                    name="toppingMince"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio13"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    KJØTTDEIG
                  </label>{" "}
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio14"
                    type="checkbox"
                    name="toppingPepperoni"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio14"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    PEPPERONI
                  </label>{" "}
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio15"
                    type="checkbox"
                    name="toppingHam"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio15"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    SKINKE
                  </label>{" "}
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio16"
                    type="checkbox"
                    name="toppingBeef"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio16"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    BIFF
                  </label>{" "}
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio17"
                    type="checkbox"
                    name="toppingChicken"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio17"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    KYLLING
                  </label>{" "}
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio18"
                    type="checkbox"
                    name="toppingChorizo"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio18"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    CHORIZO
                  </label>{" "}
                </div>
              </div>
              <div className="object-right ml-10">
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio19"
                    type="checkbox"
                    name="toppingTomato"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio19"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    TOMAT
                  </label>{" "}
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio20"
                    type="checkbox"
                    name="toppingOnion"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio20"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    LØK
                  </label>{" "}
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio21"
                    type="checkbox"
                    name="toppingJalapeno"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio21"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    JALAPENO
                  </label>{" "}
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio22"
                    type="checkbox"
                    name="toppingOlives"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio22"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    OLIVEN
                  </label>{" "}
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio23"
                    type="checkbox"
                    name="toppingAnanas"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio23"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    ANANAS
                  </label>{" "}
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio24"
                    type="checkbox"
                    name="toppingSpinach"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio24"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    SPINAT
                  </label>{" "}
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio25"
                    type="checkbox"
                    name="toppingMushrooms"
                    className="hidden"
                    onClick={checkboxClickHandler}
                  />
                  <label
                    htmlFor="radio25"
                    className="flex items-center cursor-pointer px-3"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-mainGreen rounded-full"></span>
                    SOPP
                  </label>{" "}
                </div>
              </div>
            </div>
            <button
              className="bg-mainGreen rounded-lg px-5 mt-8"
              disabled={selectedItems.length > 9}
              onClick={() => {
                handleSubmit();
              }}
              type="button"
            >
              Legg til pizza i handlekurv
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePizza;
