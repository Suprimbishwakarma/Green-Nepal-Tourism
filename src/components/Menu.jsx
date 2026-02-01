import React, { useState } from "react";
import menus from "../constants/Menu";
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = () => {
  const [hovered, setHovered] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-green-600">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end p-1">
        <button
          onClick={toggleMenu}
          className="text-2xl p-2 text-white hover:text-green-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        onDoubleClick={toggleMenu}
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row justify-center items-center gap-1 md:gap-2.5 absolute md:relative top-full left-0 w-full bg-white md:bg-transparent shadow-lg md:shadow-none z-50`}
      >
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="group relative w-full md:w-auto"
            onMouseEnter={() => setHovered(menu.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <button
              onClick={() => setHovered(hovered === menu.id ? null : menu.id)}
              className="w-full md:w-auto px-4 py-3 bg-transparent text-black md:text-white rounded-md cursor-pointer text-base font-medium flex justify-between items-center gap-2 transition-all duration-300"
            >
              {menu.title}
              <span
                className={`text-xs transition-transform duration-300 ${
                  hovered === menu.id ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {hovered === menu.id && (
              <ul
                onDoubleClick={(e) => {
                  e.stopPropagation();
                  setHovered(null);
                }}
                className="absolute md:top-full left-0 bg-green-600 rounded-md list-none py-2 m-0 shadow-xl z-[60] animate-in fade-in duration-300 whitespace-nowrap min-w-full md:min-w-[200px]"
              >
                {menu.submenu.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-md text-white cursor-pointer transition-all duration-200 hover:bg-green-800 last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Menu;
