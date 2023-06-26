import React from "react";
import Card from "../components/Card";
import { appetizers } from "../data/data";
import Link from "next/link";

interface Appetizer {
  id: number;
  name: string;
  description: string;
  price: number,
  imgUrl:string
}

const Appetizers = () => {
  return (
    <div className="mb-20">
      <h1 className="text-center text-2xl uppercase font-bold border-b-4 my-4">
        Appetizers
      </h1>
      <div>
        <ul className="menu-product-container">
          {appetizers.map((appetizer: Appetizer) => (
            <li key={appetizer.id}>
              <Link href={`/appetizers/${appetizer.id}`}>
                <Card section="appetizers" item={appetizer} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Appetizers;
