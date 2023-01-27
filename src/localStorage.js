//FOR SHOPPING CART
let cartArray = [];

let storedCartArray = [];

export const setCartArray = (cartArray) => {
  localStorage.setItem("cartArray", JSON.stringify(cartArray));
};

const onFirstVisit = () => {
  if (localStorage.getItem("cartArray") == null) {
    setCartArray(cartArray);
  }
};

export const getCartArray = () => {
  onFirstVisit();
  storedCartArray = JSON.parse(localStorage.getItem("cartArray"));
  return storedCartArray;
};

//FOR USER LOGGING

export let adminUser = [
  {
    userName: "admin",
    password: "admin",
  },
];

let storedUser = [];

let users = [
  {
    name: "admin",
    password: "admin",
  },
];

export const setUser = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

const onFirstVisitUser = () => {
  if (localStorage.getItem("users") == null) {
    setUser(users);
  }
};

export const getUser = () => {
  onFirstVisitUser();
  storedUser = JSON.parse(localStorage.getItem("users"));
  return storedUser;
};

export default storedCartArray;
