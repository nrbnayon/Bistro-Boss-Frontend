import PropTypes from "prop-types";
import Cover from "../../Shared/Cover/Cover";
import PopularMenuCard from "../../Home/PopularMenuCard";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, coverImg, title, desc }) => {
  return (
    <div>
      {title && (
        <Cover
          img={coverImg}
          title={title}
          desc={desc || `Would you like to try a ${title} dish?`}
        />
      )}

      <div className="grid m-4 md:w-[85%] mx-auto md:grid-cols-2 gap-5 my-4">
        {items.map((item) => (
          <PopularMenuCard key={item._id} menu={item} />
        ))}
      </div>
      <div className="my-6 text-center">
        <Link
          to={title ? `/order/${title}` : "/order/drinks"}
          className="bg-gray-200 border-b-4 border-primary font-cinzel font-bold py-2 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-primary hover:text-white"
        >
          ORDER NOW
        </Link>
      </div>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array.isRequired,
  coverImg: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default MenuCategory;
