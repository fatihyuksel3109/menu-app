"use client";
import { usePathname } from "next/navigation";
import { appetizers } from "../../data/data";
import ProductCard from "@/app/components/ProductCard";
const AppetizerItemPage = () => {

  const pathname = usePathname();
  console.log(pathname);
  const id = pathname.split('/').pop();

  const appetizer = appetizers.find((item) => item.id === Number(id));
  console.log(appetizer);

  // Find the appetizer with the corresponding id

  if (!appetizer) {
    return <div>Appetizer not found.</div>;
  }

  return (
    <div>
      <ProductCard item={appetizer} />
    </div>
  );
};

export default AppetizerItemPage;
