"use client";
import Image from "next/image";
import navy from "../images/navy.png";
import mint from "../images/mint.png";
import ocean from "../images/ocean.png";

const SelectWatch = () => {
  return (
    <div className="grid grid-cols-3 items-center gap-[27px] mt-20">
      <div className="grid grid-rows-[1fr 1fr 1fr] grid-cols-1 justify-items-center">
        <div className="w-[131px] h-[70px] bg-[#434558]/60 rounded-[10px] row-start-2 row-end-3 col-start-1" />
        <Image src={navy} alt="navy" className="w-[90px] h-[90px] row-start-1 row-end-3 col-start-1" />
      </div>

      <div className="grid grid-rows-[1fr 1fr 1fr] grid-cols-1 justify-items-center">
        <div className="w-[131px] h-[70px] bg-[#6addcc]/60 rounded-[10px] row-start-2 row-end-3 col-start-1" />
        <Image src={mint} alt="mint" className="w-[90px] h-[90px] row-start-1 row-end-3 col-start-1" />
      </div>

      <div className="grid grid-rows-[1fr 1fr 1fr] grid-cols-1 justify-items-center">
        <div className="w-[131px] h-[70px] bg-[#f9cdc4]/60 rounded-[10px] row-start-2 row-end-3 col-start-1" />
        <Image src={ocean} alt="ocean" className="w-[90px] h-[90px] row-start-1 row-end-3 col-start-1" />
      </div>

      {/* <Image src={navy} alt="navy" className="w-[90px] h-[90px]" />
      <Image src={mint} alt="mint" className="w-[90px] h-[90px]" />
      <Image src={ocean} alt="ocean" className="w-[90px] h-[90px]" /> */}
    </div>
  );
};

export default SelectWatch;
