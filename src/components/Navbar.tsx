import { MdOutlineShoppingBag, MdSearch } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navbar = location.pathname !== "/" && "bg-white text-black";
  return (
    <nav
      className={`${navbar} fixed top-0 left-0 w-full z-50  hover:bg-white hover:text-black transform transition-all duration-300`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-1">
        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            className="hover:underline hover:underline-offset-4 hover:text-gray-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="hover:underline hover:underline-offset-4 hover:text-gray-600"
          >
            Shop
          </NavLink>
        </div>
        <Link to="/" className="text-3xl">
          FAULT
        </Link>
        <div className="flex items-center gap-2">
          <MdSearch />
          <MdOutlineShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
