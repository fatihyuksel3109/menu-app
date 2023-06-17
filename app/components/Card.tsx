import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
  };
  section: string;
}

const Card: React.FC<CardProps> = ({ item, section }) => {
  return (
    <div
      className="card p-10 flex flex-col shadow-md shadow-slate-400"
      key={item.id}
    >
      <div
        style={{ position: "relative" }}
        className="imageContainer flex flex-col mb-4 p-5 hover:opacity-70"
      >
          <Image
            className=" rounded-xl"
            src={item.imgUrl}
            fill
            alt={item.name}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
      </div>
        <h1 className="text-xl font-semibold hover:opacity-60">{item.name}</h1>
    </div>
  );
};

export default Card;
