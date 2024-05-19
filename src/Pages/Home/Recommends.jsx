import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import axios from "axios";

const Recommends = () => {
  const header = {
    title: " --Should Try---",
    desc: "CHEF RECOMMENDS",
  };

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get("./menu.json").then((res) => {
      setMenus(res.data);
    });
  }, []);

  return (
    <div className="py-6 bg-gray-50">
      <SectionTitle header={header} />
      <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16 my-8">
        {menus.slice(0, 3).map((menu) => (
          <div
            key={menu._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <img
              src={menu.image}
              alt={menu.name}
              className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {menu.name}
              </h3>
              <p className="text-gray-600 italic mb-4">{menu.recipe}</p>
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600  border-b-4 bg-opacity-75 border-b-primary font-cinzel font-bold text-white py-2 px-6 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommends;
