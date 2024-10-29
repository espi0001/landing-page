import Image from "next/image";
import mint from "../images/mint.png";

import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Image src={mint} alt="mint" />
    </div>
  );
}
