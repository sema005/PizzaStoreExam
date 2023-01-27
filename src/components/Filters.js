import React from "react";

const Filters = ({ setFilter, props }) => {
  const filters = [
    {
      name: "Alt",
      value: "all",
    },
    {
      name: "Topp selgere",
      value: "topsellers",
    },
    {
      name: "Nyheter",
      value: "news",
    },
    {
      name: "Pizza",
      value: "pizza",
    },
    {
      name: "Pasta",
      value: "pasta",
    },
    {
      name: "Vegansk",
      value: "vegan",
    },
    {
      name: "Vegetarisk",
      value: "vegetarian",
    },
    {
      name: "Kylling",
      value: "chicken",
    },
    {
      name: "Kjøtt",
      value: "meat",
    },
    {
      name: "Sjømat",
      value: "seafood",
    },
  ];

  

  return (
    <div className="flex justify-center">
      <ul
        className="flex items-center overflow-x-scroll desktop:overflow-x-hidden mt-8 desktop:mt-24"
        id="filter-list"
      >
        {filters.map((filter) => (
          <li
            key={filter.value}
            className="filter px-4 border border-mainBlue dark:border-darkModeElements dark:text-white mx-2 rounded-sm w-auto cursor-pointer whitespace-nowrap"
            id={filter.value}
            onClick={() => {
              setFilter(filter.value);
            }}
          >
            <p>{filter.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
