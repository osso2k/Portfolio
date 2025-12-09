import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-[50%] h-[10%] pt-8">
      <div className="flex gap-3 font-serif">
        <li
          className="list-none text-xl cursor-pointer shadow-sm px-4 py-2 hover:scale-95 shadow-white"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </li>
        <li
          className="list-none text-xl cursor-pointer shadow-sm px-4 py-2 hover:scale-95  shadow-white"
          onClick={() => {
            navigate("/projects");
          }}
        >
          Projects
        </li>
        <li
          className="list-none text-xl cursor-pointer shadow-sm px-4 py-2 hover:scale-95  shadow-white"
          onClick={() => {
            navigate("/extras");
          }}
        >
          Extras
        </li>
      </div>
    </div>
  );
};

export default Navbar;
