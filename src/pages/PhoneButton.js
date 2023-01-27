import React from "react";

function PhoneButton() {
  return (
    <div className=" bg-mainBlue  text-white dark:bg-darkModeBackGround">
      <div className="flex justify-center items-center">
        <span className=" m-10 desktop:mt-32 desktop:text-4xl">
          <h1>Om oss</h1>
        </span>
      </div>
      <div className="ml-4 mr-4 pr-4 pl-4 flex justify-center items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Glasmagasinet-.jpg/1200px-Glasmagasinet-.jpg" alt="PhotoOfStore"/>
      </div>
      <div className="m-8 p-4 ">
        <span>
          <p className="flex justify-center items-center desktop:ml-64 desktop:mr-64 md:overflow-clip ">
            Et lite steinkast fra Stortorget finner du Pizza Bella Stortorget. I
            Siciliansk inspirerte arealefektive omgivelser, kan du her nyte
            autentiske italienske retter. Eller du kan bringe denne Sisilianke
            aften hjem enten ved å bestille på nett eller ringe oss. Ønsker du
            mer informasjon eller Booke Bord. Ta kontakt med oss på E-post eller
            Telefon.
          </p>
          <br></br>
          <p className="flex justify-center items-center">Benvenuti!</p>
        </span>
      </div>

      <div className="flex justify-center items-center pb-44">
        <span>
          <h2>Du kan nå oss på:</h2>
          <p>Tlf: 81549300</p>
          <p>E-post: Bellas@Bellas.no</p>
        </span>
      </div>
    </div>
  );
}

export default PhoneButton;
