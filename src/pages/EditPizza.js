import EditPizzaHeader from "../components/EditPizzaHeader";
import EditPizzaCard from "../components/cards/EditPizzaCard";
import { useLocation, useNavigate } from "react-router-dom";

const EditPizza = ({ addToCart }) => {
  const props = useLocation();
  const navigate = useNavigate();

  let item = [
    {
      id: props.state.id,
      name: props.state.name,
      image: props.state.image,
      Ratings: 4,
      contains: props.state.contains,
      allargies: props.state.allargies,
      price: props.state.price,
      quantity: props.state.quantity,
      tags: props.state.tags,
    },
  ];

  const checkPrice = (inputElement) => {
    switch (inputElement.value) {
      case "Liten":
        return 129;
      case "Medium":
        return 149;
      case "Stor":
        return 169;
      default:
        return 0;
    }
  };

  const checkFoodType = () => {
    if (item[0].tags.includes("pizza")) {
      return "pizza";
    } else {
      return "pasta";
    }
  };
  const handleSubmit = () => {
    let quantity = 1;
    let totalPrice = 0;
    if (item[0].tags.includes("pasta")) {
      totalPrice = item[0].price;
    } else {
      let quantity = parseInt(
        document.getElementById("quantityCount").innerHTML
      );
      let price = checkPrice(document.querySelector("select"));
      totalPrice = price * quantity;
    }
    addToCart(item[0].id, item[0].name, totalPrice, item[0].image, quantity);
    navigate("/menu");
  };

  return (
    <div className="text-white tablet:absolute w-full h-full dark:bg-darkModeBackGround flex justify-center items-center mobile:absolute bottom-16 desktop:m-auto text-sm tablet:text-2xl ">
      <div className="w-full relative desktop:w-3/5">
        <div className="text-black flex justify-center items-center">
          <EditPizzaHeader item={item} />
        </div>
        <div className="pb-28 desktop:pb-52 desktop:h-auto rounded-tl-full relative rounded-tr-full bg-mainBlue dark:bg-darkModeElements ">
          <EditPizzaCard
            item={item}
            checkPrice={checkPrice}
            checkFoodType={checkFoodType}
          />
          <div className="p-3  flex justify-center items-center mobile:hidden tablet:hidden ">
            <button
              onClick={() => handleSubmit()}
              className="bg-mainGreen w-32 h-32 absolute cursor-pointer -top-14 -left-8 rounded-circle border-8 border-white dark:border-darkModeBackGround flex justify-center items-center"
            >
              Legg til
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPizza;
