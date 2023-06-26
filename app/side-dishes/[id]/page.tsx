"use client";
import { usePathname } from "next/navigation";
import { sideDishes } from "../../data/data";
import ProductCard from "@/app/components/ProductCard";
const SideDishItemPage = () => {

  const pathname = usePathname();
  console.log(pathname);
  const id = pathname.split('/').pop();

  const sideDish = sideDishes.find((item) => item.id === Number(id));
  console.log(sideDish);

  // Find the sideDish with the corresponding id

  if (!sideDish) {
    return <div>sideDish not found.</div>;
  }

  return (
    <div>
      <ProductCard item={sideDish} />
    </div>
  );
};

export default SideDishItemPage;
