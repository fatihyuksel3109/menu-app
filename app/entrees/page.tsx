import React from "react";
import Card from "../components/Card";
import { entrees } from "../data/data";
import Link from "next/link";

const Entrees = () => {
  return (
    <div className="mb-20">
      <h1 className="text-center text-2xl uppercase font-bold border-b-4 my-4">
        Entrees
      </h1>
      <div>
        <ul className="menu-product-container">
          {entrees.map((entree) => (
            <li key={entree.id}>
              <Link href={`/entrees/${entree.id}`}>
                <Card section="entrees" item={entree} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Entrees;
