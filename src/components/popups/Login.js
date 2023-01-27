import React, { useState, useEffect } from "react";
import logoPic from "../../images/logoDesktop-t.png";
import { adminUser, setUser, getUser } from "../../localStorage";
import { XIcon } from "@heroicons/react/solid";

const Login = ({ togglePopupUser }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(getUser);
  const [userExist, setUserExist] = useState(false);

  const handleSubmit = () => {
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].name.toLowerCase() === name.toLocaleLowerCase() &&
        users[i].password === password
      ) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    }
  };

  const checkIfUserExist = () => {
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].name.toLowerCase() === name.toLowerCase() &&
        users[i].password === password
      ) {
        setUserExist(true);
      } else {
        setUserExist(false);
      }
    }
  };

  const addNewUser = (name, password) => {
    if (!userExist) {
      setUsers((prevState) => {
        return [
          ...prevState,
          {
            name: name,
            password: password,
          },
        ];
      });
      alert("Bruker lagt til");
    } else {
      alert("Bruker eksisterer allerede, vennligst logg inn");
    }
  };

  const checkIfLoggedIn = () => {
    if (users == null) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  };

  useEffect(() => {
    setUser(users);
  }, [users]);

  useEffect(() => {
    checkIfUserExist();
  }, [name, password, users]);

  return (
    <>
      {!isLogged && (
        <div className="absolute top-1/4 left-1/6 transform -translate-x-1/6 -translate-y-1/4 p-2 text-white left-0 right-0 m-auto">
          <div className=" relative p-4 border-8 border-mainGreen bg-mainBlue dark:bg-darkModeElements flex flex-col max-w-prose m-auto tablet:col-span-6 desktop:col-span-8 tablet:rounded-tr-full mobile:rounded-tr-full desktop:rounded-br-full desktop:rounded-bl-full tablet:rounded-tl-full mobile:rounded-tl-full">
            <form className="">
              <XIcon
                onClick={togglePopupUser}
                fill="white"
                className="absolute right-5 w-8 h-8 cursor-pointer"
              />
              <div className="flex justify-center items-center my-4">
                <img src={logoPic} alt="logo" className="h-48 m-8" />
              </div>
              <div className="">
                <label className="flex justify-center m-3 mr-8" htmlFor="name">
                  <h3>Brukeravn:</h3>
                  <input
                    className="text-black ml-2"
                    id="name"
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className="flex justify-center" htmlFor="password">
                  <h3>Passord:</h3>
                  <input
                    className="text-black ml-2"
                    id="password"
                    type="Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <div className="flex justify-center">
                  <div
                    className=" cursor-pointer border-mainGreen border-4 w-48 flex justify-center m-3 "
                    onClick={() => handleSubmit()}
                  >
                    <h3>Logg inn</h3>
                  </div>
                  <div
                    className=" cursor-pointer border-mainGreen border-4 w-48 flex justify-center m-3 "
                    onClick={() => addNewUser(name, password)}
                  >
                    <h3>Lag ny bruker</h3>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {isLogged && (
        <div className="absolute top-1/4 left-1/6 transform -translate-x-1/6 -translate-y-1/4 p-2 text-white left-0 right-0 m-auto ">
          <div className=" p-4 border-8 border-mainGreen  bg-mainBlue dark:bg-darkModeElements tablet:col-span-6 tablet:rounded-tr-full mobile:rounded-tr-full desktop:rounded-br-full desktop:rounded-bl-full tablet:rounded-tl-full mobile:rounded-tl-full desktop:m-32 ">
            <div className="">
              <XIcon
                onClick={togglePopupUser}
                fill="white"
                className="absolute right-10 desktop:right-40 w-8 h-8 "
              />
            </div>

            <div className="flex justify-center items-center my-4">
              <img src={logoPic} alt="logo" className="h-30" />
            </div>
            <div className="flex justify-center items-center ">
              <p>Velkommen tilbake {name} du er allerede logget inn. :)</p>
            </div>
            <div
              className="cursor-pointer w-full h-full p-4 bg-white text-black"
              onClick={() => setIsLogged(false)}
            >
              <h3>Logg ut</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
