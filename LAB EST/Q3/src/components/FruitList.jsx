import React from "react";

const FruitList = () => {
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

  const handleClick = (fruit) => {
    alert(`You clicked on ${fruit}`);
  };

  return (
    <div>
      <h2 className="heading">Fruit List</h2>
      <ul className="list-disc list-inside space-y-2">
        {fruits.map((fruit, index) => (
          <li
            key={index}
            onClick={() => handleClick(fruit)}
            className="cursor-pointer hover:text-blue-500"
          >
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
