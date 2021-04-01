import Image from "next/image";
import React from "react";
function Magazin() {
  //console.log(products);
  return (
    <div>
      <div className="block ">
        <Image src="/wave.svg" width={1920} height={320} />
      </div>
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-xl xl:text-5xl lg:text-3xl">Magazinul Nostru</h2>
        <h2 className="text-3xl lg:text-5xl xl:text-7xl font-semibold mt-5 mb-5">
          Produse Favorite
        </h2>
      </div>
    </div>
  );
}
export default Magazin;
