"use client"
import React, { useEffect } from "react";
import Card from "../components/Card";
import { desserts } from "../data/data";
import { metadata } from "../layout";

const Desserts = () => {

  useEffect(() => {
    document.title = `Desserts | ${metadata.title}`
  }, []);

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
