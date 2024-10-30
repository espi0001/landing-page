"use client";
import Image from "next/image";
import mint from "../images/mint.png";

import ProductText from "@/components/ProductText";
import BuyButton from "@/components/BuyButton";
import ColorIndicator from "@/components/ColorIndicator";
import SelectWatch from "@/components/SelectWatch";

import Next from "@/components/Next";
// import { useState } from "react";

const Product = () => {
  return (
    <section className="grid">
      <ProductText className="col-span-1 row-span-1" />
      <Image src={mint} alt="mint" className="col-span-2 row-span-3" />
      <ColorIndicator className="col-span-3 row-span-1" />

      <BuyButton className="col-span-1 row-span-2" />
      <Next className="col-span-1 row-span-3" />
      <SelectWatch className="col-span-2 row-span-3" />
    </section>
  );
};

export default Product;
