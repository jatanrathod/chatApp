import React from "react";

function SideNav() {
  return (
    <div className="bg-blue-800 text-blue-100 w-64 space-y-6 px-2 py-7 ">
      {/* Logo */}
      <a href="#" className="text-white flex items-center space-x-2 px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          />
        </svg>
        <span className="text-2xl font-extrabold">Jatan Rathod</span>
      </a>
      {/* Nav */}
      <nav>
        <a
          href="#"
          className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white"
        >
          A
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white"
        >
          B
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white"
        >
          C
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white"
        >
          D
        </a>
      </nav>
    </div>
  );
}

export default SideNav;
