import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // Dark Mode
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handelToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
     setTheme('light')
    }
  };

  const handelSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      // Handle any potential errors during sign out
      console.error("Error signing out:", error);
    }
  };

  // Profile DropDown
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setDropdownOpen(false);
  };

  const NavLinks = (
    <>
      <nav className="flex gap-3 md:gap-4 lg:gap-10 lg:text-xl text-[18px]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/addProduct">Add Product</NavLink>
        <NavLink to="/cart">My Cart</NavLink>
        {user ? null : <NavLink to="/register">Register</NavLink>}
      </nav>
    </>
  );

  return (
    <nav className=" border-gray-200 dark:bg-gray-900">
      <div className=" flex flex-wrap items-center justify-between mx-auto mt-8 mb-10">
        <Link className="flex items-center">
          <img src={logo} className="h-12 mr-3" alt="" />
        </Link>
        <div className="flex items-center md:order-2">
          <div className="items-center mr-5">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input 
              type="checkbox" 
              onChange={handelToggle} 
              checked={theme === "light" ? false : true}
              />
              

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          <div className="relative">
            {user ? (
              <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
                id="user-menu-button"
                aria-expanded={isDropdownOpen}
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-11 h-11 rounded-full"
                  src={user.photoURL}
                  alt="user photo"
                />
              </button>
            ) : (
              <Link to="/login">
                <button className="md:px-6 rounded bg-primaryColor md:py-3 text-xl px-3 py-2 mr-1 text-white">
                  Login
                </button>
              </Link>
            )}
            <div
              className={`z-50 ${
                isDropdownOpen ? "block" : "hidden"
              } absolute right-0 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}
              id="user-dropdown"
            >
              {user ? (
                <div className="px-12 py-4">
                  <span className="block text-gray-900 text-center">
                    <p>Welcome, {user.displayName}</p>
                  </span>
                  <span className="block text-gray-500 truncate text-center">
                    <p>{user.email}</p>
                  </span>
                </div>
              ) : null}

              <ul className="py-2" aria-labelledby="user-menu-button">
                {user ? (
                  <ul>
                    <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center">
                      <NavLink to="/">
                        <button>Home</button>
                      </NavLink>
                    </li>
                    <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center">
                      <NavLink to="/cart">
                        <button>Your Cart</button>
                      </NavLink>
                    </li>
                    <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100  text-center">
                      <Link to="/">
                        <button onClick={handelSignOut}>Sign Out</button>
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </ul>
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover-bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-user"
            aria-expanded={isDropdownOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-10 h-10 text-black ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {isMobileMenuOpen ? (
          <div
            className="items-center justify-between md:hidden w-full mt-4 border border-gray-100 rounded-lg bg-gray-50 bg-opacity-90 backdrop-blur-md"
            id="navbar-mobile-menu"
          >
            <ul className="flex flex-col p-4 space-y-4 text-center">
              <li className="block text-gray-900  hover:text-blue-700">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="block text-gray-900  hover:text-blue-700">
                <NavLink to="/addProduct">Add Product</NavLink>
              </li>
              <li className="block text-gray-900  hover:text-blue-700">
                <NavLink to="/cart">Your Cart</NavLink>
              </li>
              {user ? null : (
                <li className="block text-gray-900  hover:text-blue-700">
                  <NavLink to="/register">Register</NavLink>
                </li>
              )}
            </ul>
          </div>
        ) : null}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {NavLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;