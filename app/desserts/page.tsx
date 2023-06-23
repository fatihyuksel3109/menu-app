import React from "react";
import Card from "../components/Card";
import { desserts } from "../data/data";

const Desserts = () => {
  

  return (
    <div className="mb-20">
      <h1 className="text-center text-2xl uppercase font-bold border-b-4 my-4">
      Desserts
      </h1>
      <div>
        <ul className="appetizerContainer">
          {desserts.map((dessert) => (
            <li key={dessert.id}>
              <Card section="desserts" item={dessert} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Desserts;
