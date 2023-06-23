"use client";
import React, { useEffect } from "react";
import Card from "../components/Card";
import { sideDishes } from "../data/data";
import { metadata } from "../layout";

const SideDishes = () => {

  useEffect(() => {
    document.title = `Side Dishes | ${metadata.title}`
  }, [])

  return (
    <div className="mb-20">
      <h1 className="text-center text-2xl uppercase font-bold border-b-4 my-4">Side Dishes</h1>
      <div >
        <ul className="appetizerContainer">
          {sideDishes.map((sideDish) => (
            <li key={sideDish.id}>
              <Card section="side-dishes" item={sideDish} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideDishes;