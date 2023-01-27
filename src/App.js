import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import DesktopNavbar from "./components/DesktopNavbar";
import Landingpage from "./pages/Landingpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShoppingCart from "./components/popups/ShoppingCart";
import Menu from "./pages/Menu";
import Login from "./components/popups/Login";
import CreatePizza from "./pages/CreatePizza";
import { setCartArray, getCartArray } from "./localStorage";
import OrderIsOnMyWay from "./pages/OrderIsOnMyWay";
import EditPizza from "./pages/EditPizza";
import PhoneButton from "./pages/PhoneButton";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [cartFood, setCartFood] = useState(getCartArray);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [deliverAdress, setDeliverAdress] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setCartArray(cartFood);
  }, [cartFood]);

  const togglePopupCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const togglePopupUser = () => {
    setIsUserOpen(!isUserOpen);
  };
  const togglePopupOrder = () => {
    setIsOrderOpen(!isOrderOpen);
  };

  const addToCart = (id, name, price, image, quantity) => {
    setCartFood((prevState) => {
      return [
        ...prevState,
        {
          id: id,
          cartId: prevState.length + 1,
          name: name,
          price: price,
          image: image,
          quantity: quantity,
        },
      ];
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode));
  };

  const checkIfDarkMode = () => {
    let darkMode = localStorage.getItem("isDarkMode");
    setIsDarkMode(JSON.parse(darkMode));
    if (darkMode === "true") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    checkIfDarkMode();
  }, [isDarkMode]);
  return (
    <Router>
      <DesktopNavbar
        togglePopupCart={togglePopupCart}
        togglePopupUser={togglePopupUser}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <Routes>
        <Route exact path="/" element={<Landingpage />} />
        <Route
          path="/editPizza"
          element={<EditPizza addToCart={addToCart} />}
        />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/create-pizza"
          element={<CreatePizza addToCart={addToCart} />}
        />
        <Route exact path="/About" element={<PhoneButton />} />
      </Routes>
      {isCartOpen && (
        <ShoppingCart
          cartFood={cartFood}
          togglePopupCart={togglePopupCart}
          setCartFood={setCartFood}
          togglePopupOrder={togglePopupOrder}
          isCartOpen={isCartOpen}
          setDeliverAdress={setDeliverAdress}
        />
      )}
      {isUserOpen && <Login togglePopupUser={togglePopupUser} />}
      {isOrderOpen && (
        <OrderIsOnMyWay
          togglePopupOrder={togglePopupOrder}
          deliverAdress={deliverAdress}
        />
      )}

      <Navbar
        togglePopupOrder={togglePopupOrder}
        togglePopupCart={togglePopupCart}
        togglePopupUser={togglePopupUser}
        isCartOpen={isCartOpen}
        addToCart={addToCart}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
    </Router>
  );
}

export default App;
