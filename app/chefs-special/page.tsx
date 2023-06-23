"use client"
import React, { useEffect } from "react";
import Card from "../components/Card";
import { chefSpecials } from "../data/data";
import { metadata } from "../layout";

const ChefsSpecial = () => {

  useEffect(() => {
    document.title = `Chef's Special | ${metadata.title}`
  }, [])

  return (
    <div className="mb-20">
      <h1 className="text-center text-2xl uppercase font-bold border-b-4 my-4">
        Chef's Specials
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
