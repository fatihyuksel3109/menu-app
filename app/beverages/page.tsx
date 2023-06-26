import React from "react";
import Link from "next/link";
import Card from "../components/Card";
import { beverages } from "../data/data";

interface Beverage {
  id: number;
  name: string;
  description: string;
  price: number,
  imgUrl:string
}

const Beverages = () => {
  return (
    <div className="mb-20">
      <h1 className="text-center text-2xl uppercase font-bold border-b-4 my-4">
        Beverages
      </h1>
      <div>
        <ul className="menu-product-container">
          {beverages.map((beverage: Beverage) => (
            <li key={beverage.id}>
              <Link href={`/beverages/${beverage.id}`}>
                <Card section="beverages" item={beverage} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Beverages;
