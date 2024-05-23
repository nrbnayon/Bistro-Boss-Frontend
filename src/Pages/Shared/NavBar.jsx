import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className="hover:text-primary hover:underline transition duration-300"
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="hover:text-primary hover:underline transition duration-300"
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className="hover:text-primary hover:underline transition duration-300"
        >
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className="hover:text-primary hover:underline transition duration-300"
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className="hover:text-primary hover:underline transition duration-300"
        >
          OUR SHOP
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/salad"
          className="hover:text-primary hover:underline transition duration-300"
        >
          ORDER FOOD
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 fixed h-20 z-[999] max-w-screen-xl mx-auto opacity-90">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content gap-2 uppercase mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="text-base">BISTRO BOSS</p>
          <p className="text-sm">RESTAURANT</p>
        </div>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal space-x-2 px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <NavLink className="btn">LOGIN</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
