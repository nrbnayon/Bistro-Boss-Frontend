import SectionTitle from "../Shared/SectionTitle";
import PopularMenuCard from "./PopularMenuCard";
import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  // const [menus, setMenus] = useState([]);
  const header = {
    title: " --Check it out---",
    desc: "FROM OUR MENU",
  };

  const [menus] = useMenu();
  const popular = menus.filter((item) => item.category === "popular");
  // useEffect(() => {
  //   axios.get("./menu.json").then((res) => {
  //     const items = res.data;

  //     const popularItems = items.filter((item) => item.category === "popular");

  //     setMenus(popularItems);
  //   });
  // }, []);
  return (
    <div className="my-6">
      <SectionTitle header={header} />
      <div className="flex flex-col md:flex-row">
        <div className="grid m-4 md:w-[85%] mx-auto md:grid-cols-2 gap-5 my-4 ">
          {popular.map((menu) => (
            <PopularMenuCard key={menu._id} menu={menu} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link
          to="/allFoods"
          className="group relative flex md:w-1/6 mx-auto items-center rounded-lg border-2 border-secondary p-4 text-sky-300"
        >
          <span>VIEW FULL MENU</span>
          <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-blue-500 duration-300 group-hover:w-5/6">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PopularMenu;
