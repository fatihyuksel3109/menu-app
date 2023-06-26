"use client";
import { usePathname } from "next/navigation";
import { chefSpecials } from "../../data/data";
import ProductCard from "@/app/components/ProductCard";
const SpecialItemPage = () => {

  const pathname = usePathname();
  console.log(pathname);
  const id = pathname.split('/').pop();

  const Special = chefSpecials.find((item) => item.id === Number(id));
  console.log(Special);

  // Find the Special with the corresponding id

  if (!Special) {
    return <div>Special not found.</div>;
  }

  return (
    <div>
      <ProductCard item={Special} />
    </div>
  );
};

export default SpecialItemPage;
