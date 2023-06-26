"use client";
import { usePathname } from "next/navigation";
import { desserts } from "../../data/data";
import ProductCard from "@/app/components/ProductCard";
const DessertItemPage = () => {

  const pathname = usePathname();
  const id = pathname.split('/').pop();

  const dessert = desserts.find((item) => item.id === Number(id));

  // Find the dessert with the corresponding id

  if (!dessert) {
    return <div>dessert not found.</div>;
  }

  return (
    <div>
      <ProductCard item={dessert} />
    </div>
  );
};

export default DessertItemPage;
