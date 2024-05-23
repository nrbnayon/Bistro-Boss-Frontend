import { useState } from "react";
import PropTypes from "prop-types";
import FoodCard from "../Shared/FoodCard";
import { Pagination, Stack } from "@mui/material";

const OrderTabs = ({ foods }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(foods.length / itemsPerPage);

  // Calculate the start and end index of items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the slice of foods to display for the current page
  const foodsToShow = foods.slice(startIndex, endIndex);

  // Handler for page change event
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {foodsToShow.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
};

OrderTabs.propTypes = {
  foods: PropTypes.array.isRequired,
};

export default OrderTabs;
