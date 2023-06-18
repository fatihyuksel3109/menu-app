import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  item: {
    id: number;
    image: string;
    name: string;
    link: string;
  };
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div
      className="menuItem p-16 shadow-lg shadow-slate-500 items-center"
      key={item.id}
    >
      <Link href={item.link}>
        <h1 className="text-xl font-semibold mb-4 hover:opacity-70">
          {item.name}
        </h1>
      </Link>
      <div
        style={{ position: "relative" }}
        className="imageContainer flex flex-col  hover:opacity-80"
      >
        <Link href={item.link}>
          <Image
            className=" rounded-2xl"
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </Link>
      </div>
    </div>
  );
};

export default MenuItem;
