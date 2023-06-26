import React from "react";
import Card from "../components/Card";
import { chefSpecials } from "../data/data";
import Link from "next/link";

const ChefsSpecial = () => {
  return (
    <div className="mb-20">
      <h1 className="text-center text-2xl uppercase font-bold border-b-4 my-4">
        Chef's Specials
      </h1>
      <div>
        <ul className="menu-product-container">
          {chefSpecials.map((chefSpecial) => (
            <li key={chefSpecial.id}>
              <Link href={`/chefs-special/${chefSpecial.id}`}>
                <Card section="chefs-special" item={chefSpecial} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChefsSpecial;
