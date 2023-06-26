"use client";
import { usePathname } from "next/navigation";
import { entrees } from "../../data/data";
import ProductCard from "@/app/components/ProductCard";
const EntreeItemPage = () => {

  const pathname = usePathname();
  console.log(pathname);
  const id = pathname.split('/').pop();

  const entree = entrees.find((item) => item.id === Number(id));
  console.log(entree);

  // Find the entree with the corresponding id

  if (!entree) {
    return <div>entree not found.</div>;
  }

  return (
    <div>
      <ProductCard item={entree} />
    </div>
  );
};

export default EntreeItemPage;
