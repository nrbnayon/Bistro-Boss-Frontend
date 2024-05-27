import { Link, NavLink, Outlet } from "react-router-dom";
import { FaCartArrowDown, FaRectangleList } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { GiWallet } from "react-icons/gi";
import { MdRateReview, MdContentPasteSearch } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400 font-cinzel font-semibold ">
        <ul className="menu space-y-3">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FcCalendar />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <GiWallet />
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCartArrowDown />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addReviews">
              <MdRateReview />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myBooking">
              <FaRectangleList />
              My Booking
            </NavLink>
          </li>
          <div className="divider"></div>

          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/menu">
              <MdContentPasteSearch /> Menu
            </Link>
          </li>
          <li>
            <Link to="/order/salad">
              <FaHome /> Order
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <BiSolidPhoneCall /> Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
