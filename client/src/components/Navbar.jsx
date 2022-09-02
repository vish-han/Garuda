import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import logo from '../assets/logo1.png'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="" className="w-[150px] h-[52px] invert" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {/* map over navlinks-dynamic block of code-to instantly return something use parenthesis */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins
            font-normal
            cursor-pointer
            text-[16px] 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
            text-white
            `}
          >
            <Link to={nav.id}>
              {" "}
              {/*dynamic string*/}
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="cursor-pointer w-[28px] h-[28px]
          object-contain"
          // change toggle-on click call back funcn set the toggle to
          //in react never update the state using the previous version of the same state
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute
        top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins
                  font-normal
                  cursor-pointer
                  text-[16px] 
                  ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}
                  text-white
                  `}
              >
                <Link to={nav.id}>
                  {" "}
                  {/*dynamic string*/}
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
