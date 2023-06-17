import React from "react";
import Image from "next/image";
import { GetStaticProps, GetStaticPaths } from "next";
import { appetizers } from "../data/data";

interface DetailProps {
  appetizer: {
    id: number;
    imgUrl: string;
    name: string;
    description: string;
    price: number;
  };
}

const DetailPage: React.FC<DetailProps> = ({ appetizer }) => {
  return (
    <div>
      <div>
        <Image src={appetizer.imgUrl} alt={appetizer.name} width={400} height={400} />
      </div>
      <div>
        <h2>{appetizer.name}</h2>
        <p>{appetizer.description}</p>
      </div>
      <h3>{appetizer.price}</h3>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = appetizers.map((appetizer) => ({
    params: { id: appetizer.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params.id as string, 10);
  const item = appetizers.find((appetizer) => appetizer.id === id);

  return {
    props: {
      item,
    },
  };
};

export default DetailPage;
