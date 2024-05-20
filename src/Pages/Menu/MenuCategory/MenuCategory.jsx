import PropTypes from "prop-types";
import Cover from "../../Shared/Cover/Cover";
import PopularMenuCard from "../../Home/PopularMenuCard";

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
