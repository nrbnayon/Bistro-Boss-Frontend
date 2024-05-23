import PropTypes from "prop-types";
import FoodCard from "../Shared/FoodCard";

const OrderTabs = ({ foods }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {foods.map((food) => (
        <FoodCard key={food._id} food={food} />
      ))}
    </div>
  );
};

OrderTabs.propTypes = {
  foods: PropTypes.array.isRequired,
};

export default OrderTabs;
