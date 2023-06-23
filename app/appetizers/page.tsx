"use client"
import React, { use, useEffect } from "react";
import Card from "../components/Card";
import { appetizers } from "../data/data";
import Link from "next/link";
import { metadata } from "../layout";

const Appetizers = () => {

  useEffect(() => {
    document.title = `Appetizers | ${metadata.title}`
  }, [])

  return (
    <div className="mb-20">
      <h1 className="text-center text-2xl uppercase font-bold border-b-4 my-4">
        Appetizers
      </h1>
      <div>
        <ul className="appetizerContainer">
          {appetizers.map((appetizer) => (
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
