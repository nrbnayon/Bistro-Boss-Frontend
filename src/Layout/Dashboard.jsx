import { Link, NavLink, Outlet } from "react-router-dom";
import { FaCartArrowDown, FaRectangleList } from "react-icons/fa6";
import { FaHome, FaShopify } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { GiWallet } from "react-icons/gi";
import { MdRateReview, MdContentPasteSearch } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const { cart } = useCart();
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-64 md:min-h-screen bg-orange-400 font-cinzel font-semibold text-white">
        <ul className="menu space-y-3 p-4">
          <li>
            <NavLink
              to="/dashboard/userHome"
              className="flex items-center space-x-2"
            >
              <FaHome />
              <span>User Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reservation"
              className="flex items-center space-x-2"
            >
              <FcCalendar />
              <span>Reservation</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/paymentHistory"
              className="flex items-center space-x-2"
            >
              <GiWallet />
              <span>Payment History</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cart"
              className="flex items-center space-x-2"
            >
              <FaCartArrowDown />
              <span>My Cart ({cart.length})</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/addReviews"
              className="flex items-center space-x-2"
            >
              <MdRateReview />
              <span>Add Review</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myBooking"
              className="flex items-center space-x-2"
            >
              <FaRectangleList />
              <span>My Booking</span>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="/" className="flex items-center space-x-2">
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/menu" className="flex items-center space-x-2">
              <MdContentPasteSearch />
              <span>Menu</span>
            </Link>
          </li>
          <li>
            <Link to="/order/salad" className="flex items-center space-x-2">
              <FaShopify />
              <span>Order</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center space-x-2">
              <BiSolidPhoneCall />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
