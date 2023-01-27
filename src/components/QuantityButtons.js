import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/outline";

function Counter({ number, elementId }) {
  const [count, setCount] = useState(number);

  const add = () => {
    setCount((prevCount) => {
      return (prevCount += 1);
    });
  };

  const remove = () => {
    setCount((prevCount) => {
      return (prevCount -= 1);
    });
  };

  return (
    <div className="App flex items-center">
      <MinusCircleIcon stroke="#4DD69A" className="w-4" onClick={remove} />
      <div className="px-2 py-2" id={elementId}>
        {count}
      </div>
      <PlusCircleIcon stroke="#4DD69A" className="w-4" onClick={add} />
    </div>
  );
}
export default Counter;
