import React from "react";
import { IoCartOutline, IoHomeOutline, IoSearchOutline } from "react-icons/io5";
import { CiHeart, CiSettings } from "react-icons/ci";

const BottomNav = () => {
  return (
    <nav className=" px-3 py-3 text-[#074740]  absolute flex justify-between sm:hidden w-full bottom-0 shadow-custom-shadow ">
      <div className="flex justify-between items-center h-full w-[35%]">
        <div className=" flex flex-col items-center">
          <IoHomeOutline />
          <p className="font-light text-sm">Home</p>
        </div>
        <div className="flex flex-col items-center">
          <CiHeart />
          <p className="font-light text-sm">Wishlist</p>
        </div>
      </div>
      <div className="relative ">
        <div className=" h-[60px] w-[60px]  text-green-50  bg-[#074740] flex justify-center items-center rounded-full absolute -top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
          <IoCartOutline size="1.5em" />
        </div>
      </div>

      <div className="flex justify-between items-center gap-5 h-full w-[35%]">
        <div className="flex flex-col items-center ">
          <IoSearchOutline />
          <p className="font-light text-sm">Search</p>
        </div>
        <div className="flex flex-col items-center">
          <CiSettings />
          <p className="font-light text-sm">Setting</p>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
