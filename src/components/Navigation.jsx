import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <FaApple size={50} />

      <div className="flex gap-[90px] font-semibold">
        <a className=" hover:bg-white hover:text-blue-600 hover:p-1 active:bg-white " href="#">
          Mac
        </a>
        <a href="#">iPhone</a>
        <a href="#">iPad</a>
        <a href="#">iWatch</a>
        <a href="#">Support</a>
      </div>

      <div className="flex gap-4">
        <CiSearch size={24} />
        <hr />
        <RiShoppingBag3Line size={24} />
      </div>
    </nav>
  );
};

export default Navigation;
