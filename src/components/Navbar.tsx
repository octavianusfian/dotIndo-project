import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useAppSelector } from "@/store/hooks";
import LogoutButton from "./ui-custom/LogoutButton";
import ButtonCustom from "./ui-custom/ButtonCustom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const user = useAppSelector((state) => state.authState.user);

  const numItemsInCart = useAppSelector(
    (state) => state.cartState.numItemsInCart
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-base-300">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Title */}
        <NavLink
          to="/"
          className="text-3xl font-bold text-primary hidden lg:flex"
        >
          Dot Indonesia
        </NavLink>

        {/* Burger icon */}
        <div className="flex lg:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl text-primary">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Links Desktop */}
        <div className="hidden lg:flex">
          <ul className="flex space-x-4">
            <NavLinks />
          </ul>
        </div>

        {/* Cart + Login/Logout */}
        <div className="flex items-center gap-x-8">
          {user ? (
            <>
              <NavLink
                to="/cart"
                className="relative ml-4 flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 transition"
              >
                <BsCart3 className="h-6 w-6" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-blue-500 rounded-full">
                  {numItemsInCart}
                </span>
              </NavLink>

              <LogoutButton />
            </>
          ) : (
            <ButtonCustom to="/login">Login</ButtonCustom>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-base-300">
          <ul className="flex flex-col items-center gap-4 py-4">
            <NavLinks />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
