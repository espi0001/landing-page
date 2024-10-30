"use client";
import { FaApple } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";
import { FiShoppingBag } from "react-icons/fi";

const Navigation = () => {
  return (
    <header className="flex justify-between items-center">
      <a href="#">
        <FaApple size={50} />
      </a>

      <div className="flex gap-[58px] font-medium text-lg">
        {/* <a className=" hover:bg-white hover:text-[#b5ccd9] hover:p-2 active:bg-white hover:w-[130px] hover:h-9 hover:rounded-[100px] hover:text-center" href="#">
          Mac
        </a> */}

        <a id="link" href="#">
          Mac
        </a>
        <a id="link" href="#">
          iPhone
        </a>
        <a id="link" href="#">
          iPad
        </a>
        <a id="link" href="#">
          iWatch
        </a>
        <a id="link" href="#">
          Support
        </a>
      </div>

      <div className="flex gap-4">
        <CgSearch size={24} />
        <hr className="h-[22px] outline outline-[0.5px] rounded" />
        <FiShoppingBag size={24} />
      </div>
    </header>
  );
};

export default Navigation;
