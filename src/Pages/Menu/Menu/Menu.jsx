import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../Shared/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
const Menu = () => {
  const [menus] = useMenu();
  const offers = menus.filter((item) => item.category === "offered");
  const desserts = menus.filter((item) => item.category === "dessert");
  const soups = menus.filter((item) => item.category === "soup");
  const salads = menus.filter((item) => item.category === "salad");
  const pizzas = menus.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={img} title="Our Menu" desc="Would you like to try a dish?" />
      <SectionTitle
        header={{ desc: "TODAY'S OFFER", title: "---Don't Miss---" }}
      />
      <MenuCategory items={offers} />
      <MenuCategory items={desserts} title={"dessert"} coverImg={dessertImg} />
      <MenuCategory items={pizzas} title={"pizza"} coverImg={pizzaImg} />
      <MenuCategory items={soups} title={"soup"} coverImg={soupImg} />
      <MenuCategory items={salads} title={"salad"} coverImg={saladImg} />
    </div>
  );
};

export default Menu;
