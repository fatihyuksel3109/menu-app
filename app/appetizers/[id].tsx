import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GetStaticProps, GetStaticPaths } from "next";
import { appetizers } from "../data/data";

interface AppetizerDetails {
  id: number;
  imgUrl: string;
  name: string;
  description: string;
  price: number;
}

const DetailPage: React.FC<{ appetizer: AppetizerDetails }> = ({ appetizer }) => {
  const [currentAppetizer, setCurrentAppetizer] = useState<AppetizerDetails | null>(null);

  useEffect(() => {
    const fetchAppetizer = () => {
      const id = appetizer.id;
      const appetizerData = appetizers.find((appetizer) => appetizer.id === id);

      if (appetizerData) {
        setCurrentAppetizer(appetizerData);
      }
    };

    fetchAppetizer();
  }, [appetizer.id]);

  if (!currentAppetizer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <Image
          src={currentAppetizer.imgUrl}
          alt={currentAppetizer.name}
          width={400}
          height={400}
        />
      </div>
      <div>
        <h2>{currentAppetizer.name}</h2>
        <p>{currentAppetizer.description}</p>
      </div>
      <h3>{currentAppetizer.price}</h3>
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
  const id = parseInt(params?.id as string, 10) || 0;
  const appetizer = appetizers.find((appetizer) => appetizer.id === id);

  return {
    props: {
      appetizer,
    },
  };
};

export default DetailPage;
