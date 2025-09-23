import navImg from "../../assets/logo.png";
import dollarImg from "../../assets/Icon.png";

import React from "react";

const Navbar = ({availableBalance}) => {
  return (
    <div>
      <div className="navbar ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img className="w-[60px] h-[60px] ml-[40px]" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center  mr-[50px]">
          <span>{availableBalance}</span>
          <span className="mr-[5px] ">
            <img src={dollarImg} alt="" />
          </span>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
