"use client";
import { usePathname } from "next/navigation";
import { chefSpecials } from "../../data/data";
import ProductCard from "@/app/components/ProductCard";
const SpecialItemPage = () => {

  const pathname = usePathname();
  const id = pathname.split('/').pop();

  const special = chefSpecials.find((item) => item.id === Number(id));

  // Find the Special with the corresponding id

  if (!special) {
    return <div>Special not found.</div>;
  }

  return (
    <div>
      <ProductCard item={special} />
    </div>
  );
};

export default SpecialItemPage;
