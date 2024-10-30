import Image from "next/image";
import mint from "../images/mint.png";

import Navigation from "@/components/Navigation";
// import ProductText from "@/components/ProductText";
// import BuyButton from "@/components/BuyButton";
// import ColorIndicator from "@/components/ColorIndicator";
// import SelectWatch from "@/components/SelectWatch";
import navy from "../images/navy.png";
import ocean from "../images/ocean.png";

import Next from "@/components/Next";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <Navigation />
      <section>
        {/* <ProductText className="col-span-1 row-span-1" /> */}
        <h1 className="col-start-1 col-end-2 row-span-1 text-white text-[64px] font-normal content-center">
          <span className="font-bold">The Perfect Moment</span> <br /> Between Past And <br />
          Future.
        </h1>

        <Image src={navy} alt="navy" className="col-start-2 col-end-3 row-span-2 w-[486px] h-[486px] mt-[-19px] mb-[134px]" />

        {/* <ColorIndicator className="col-span-3 row-span-1" /> */}
        {/* <button className="col-start-3 row-span-1 w-[30px] h-[30px] bg-[#404354] rounded-full shadow border-2 border-white self-center"></button> */}
        <div className="col-start-3 row-span-1 self-center">
          <div className="flex flex-col items-center justify-center gap-[3px]">
            <button className="w-[30px] h-[30px] bg-[#404354] rounded-full shadow border-2 border-white" />
            <div className="flex flex-col items-center justify-center gap-[2px]">
              <div className="w-0.5 h-0.5 bg-white rounded-full" />
              <div className="w-0.5 h-0.5 bg-white rounded-full" />
              <div className="w-0.5 h-0.5 bg-white rounded-full" />
              <div className="w-0.5 h-0.5 bg-white rounded-full" />
            </div>

            <button className="w-5 h-5 bg-[#58d7c4] rounded-full border border-white" />
            <div className="flex flex-col items-center justify-center gap-[2px]">
              <div className="w-0.5 h-0.5 bg-white rounded-full" />
              <div className="w-0.5 h-0.5 bg-white rounded-full" />
              <div className="w-0.5 h-0.5 bg-white rounded-full" />
              <div className="w-0.5 h-0.5 bg-white rounded-full" />
            </div>
            <button className="w-5 h-5 bg-[#f2cec6] rounded-full border border-white" />
          </div>
        </div>

        {/* <BuyButton className="col-span-1 row-span-2" /> */}
        <button className="col-start-1 col-end-2 row-start-2 px-[73px] py-[17px] border-solid border-[3px] border-white rounded-full text-2xl font-medium self-start justify-self-start">Buy Now</button>

        {/* <Next className="col-span-1 row-span-3" /> */}
        <div className="col-start-1 col-span-1 row-span-3 content-end mb-[25px]">
          <div className="flex gap-4 items-center">
            <FaArrowLeftLong />
            <p>1</p>
            <FaArrowRight />
          </div>
        </div>

        {/* <SelectWatch className="col-span-2 row-span-3" /> */}
        <div className="col-start-2 col-end-3 row-start-3 row-end-4">
          <div className="grid grid-cols-3 items-center gap-[27px]">
            <div className="grid grid-rows-[1fr 1fr 1fr] grid-cols-1 justify-items-center">
              <div className="w-[131px] h-[70px] bg-[#434558]/60 rounded-[10px] row-start-2 row-end-3 col-start-1" />
              <Image src={navy} alt="navy" className="w-[90px] h-[90px] row-start-1 row-end-3 col-start-1 mb-[8px]" />
            </div>

            <div className="grid grid-rows-[1fr 1fr 1fr] grid-cols-1 justify-items-center">
              <div className="w-[131px] h-[70px] bg-[#6addcc]/60 rounded-[10px] row-start-2 row-end-3 col-start-1" />
              <Image src={mint} alt="mint" className="w-[90px] h-[90px] row-start-1 row-end-3 col-start-1 mb-[8px]" />
            </div>

            <div className="grid grid-rows-[1fr 1fr 1fr] grid-cols-1 justify-items-center">
              <div className="w-[131px] h-[70px] bg-[#f9cdc4]/60 rounded-[10px] row-start-2 row-end-3 col-start-1" />
              <Image src={ocean} alt="ocean" className="w-[90px] h-[90px] row-start-1 row-end-3 col-start-1 mb-[8px]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
