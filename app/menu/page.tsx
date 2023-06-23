import { menuItems } from "../data/data";
import MenuItem from "../components/MenuItem";

const Menu = () => { 

  
  return (
    <div className="mb-20 pt-4 mt-4 ">
      <h1 className="text-center text-2xl uppercase font-bold ">Menu</h1>
      <div className="menuContainer">
        {menuItems.map((item) => {
          return <MenuItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
