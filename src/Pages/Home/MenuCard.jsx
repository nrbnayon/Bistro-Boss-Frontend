import PropTypes from "prop-types";

const MenuCard = ({ menu }) => {
  const { image, name, price, recipe } = menu;
  return (
    <div className="flex gap-6 items-center p-4 bg-gray-100 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        src={image}
        alt={`${name} image`}
        className="w-[118px] h-[104px] rounded-br-[200px] rounded-tr-[200px] rounded-bl-[200px] object-cover transform hover:scale-105 transition-transform duration-300 ease-in"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-2">
          {name}
          <span className="text-gray-400">---------------</span>
        </h3>
        <p className="text-sm text-gray-600">{recipe}</p>
      </div>
      <p className="text-xl text-yellow-400 font-bold">${price}</p>
    </div>
  );
};

MenuCard.propTypes = {
  menu: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    recipe: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuCard;
