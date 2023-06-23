"use client"
import React, { useEffect } from "react";
import Card from "../components/Card";
import { entrees } from "../data/data";
import { metadata } from "../layout";

const Entrees = () => {

  useEffect(() => {
    document.title = `Entrees | ${metadata.title}`
  }, [])

  return (
    <div className="mb-20">
      <h1 className="text-center text-2xl uppercase font-bold border-b-4 my-4">Entrees</h1>
      <div >
        <ul className="appetizerContainer">
          {entrees.map((entrees) => (
            <li key={entrees.id}>
              <Card section="entrees" item={entrees} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Entrees;