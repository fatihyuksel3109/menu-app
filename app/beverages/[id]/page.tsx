"use client";
import {  usePathname } from "next/navigation";
import { beverages } from "../../data/data";
import ProductCard from "@/app/components/ProductCard";
const BeverageItemPage = () => {
  
  const pathname = usePathname();
  console.log(pathname);
  const id = pathname.split('/').pop();

  const beverage = beverages.find((item) => item.id === Number(id));
  console.log(beverage);

  // Find the beverage with the corresponding id

  if (!beverage) {
    return <div>beverage not found.</div>;
  }

  return (
    <div>
      <ProductCard item={beverage} />
    </div>
  );
};

export default BeverageItemPage;
