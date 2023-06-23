"use client";
import React, { useEffect } from "react";
import Card from "../components/Card";
import { beverages } from "../data/data";
import { metadata } from "../layout";

const Beverages = () => {

  useEffect(() => {
    document.title = `Beverages | ${metadata.title}`
  }, [])

  return (
    <div className="mb-20">
      <h1 className="text-center text-2xl uppercase font-bold border-b-4 my-4">
        Beverages
      </h1>
      <div>
        <ul className="appetizerContainer">
          {beverages.map((beverages) => (
            <li key={beverages.id}>
              <Card section="beverages" item={beverages} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Beverages;
