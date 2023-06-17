import React from "react";
import Card from "../components/Card";
import { chefSpecials } from "../data/data";

const ChefsSpecial = () => {
  return (
    <div className="mb-20">
      <h1 className="text-center text-2xl uppercase font-bold border-b-4 my-4">
        Chefs Specials
      </h1>
      <div>
        <ul className="appetizerContainer">
          {chefSpecials.map((chefSpecial) => (
            <li key={chefSpecial.id}>
              <Card section="chefs-special" item={chefSpecial} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChefsSpecial;
