import React from "react";
import Image from "next/image";

interface ProductCardProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
  };
}

const Card: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <div className=" sm:pb-10">
      <div className="w-11/12 sm:w-1/2 mx-auto items-center shadow-lg shadow-slate-400 p-4 rounded-md flex flex-col ">
        <div
          style={{ position: "relative" }}
          className=" flex flex-col mb-4 p-4"
        >
          <Image
            className="rounded-xl"
            src={item.imgUrl}
            width={600}
            height={600}
            alt={item.name}
          />
        </div>

        <div className="w-full flex flex-row justify-around mb-6 border-b-2">
          <h3 className="font-semibold text-xl">{item.name}</h3>
          <h4 className="text-xl">$ {item.price}</h4>
        </div>
        <p className="text-lg text-center">{item.description} </p>
      </div>
    </div>
  );
};

export default Card;
