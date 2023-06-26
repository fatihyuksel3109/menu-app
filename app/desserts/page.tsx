import React from "react";
import Link from "next/link";
import Card from "../components/Card";
import { desserts } from "../data/data";

const Desserts = () => {
  return (
    <div className="mb-20">
      <h1 className="text-center text-2xl uppercase font-bold border-b-4 my-4">
        Desserts
      </h1>
      <div>
        <ul className="menu-product-container">
          {desserts.map((dessert) => (
            <li key={dessert.id}>
              <Link href={`/desserts/${dessert.id}`}>
                <Card section="desserts" item={dessert} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Desserts;
