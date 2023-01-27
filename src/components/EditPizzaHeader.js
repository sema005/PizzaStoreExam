import React from "react";

function EditPizzaHeader({ item }) {
  return (
    <div className="flex flex-col bg-white w-full h-full justify-center items-center dark:bg-darkModeBackGround">
      <div className="h-52 w-52 -mb-11 tablet:h-96 tablet:w-96 tablet:-mb-3 desktop:mb-2 desktop:h-64 desktop:w-64 flex justify-center items-center">
        <img src={item[0].image} alt="Bilde av retten du vil redigere" />
      </div>
      <p className="tablet:text-3xl desktop:text-4xl dark:text-white">
        {item[0].name}
      </p>
    </div>
  );
}

export default EditPizzaHeader;
