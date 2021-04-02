import Image from "next/image";
import React from "react";
import Product from "./Product";
function Magazin({ products }) {
  products.length = 4;
  console.log(products);
  return (
    <div className="pb-32">
      <div className="block ">
        <Image src="/wave.svg" width={1920} height={320} />
      </div>
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-xl xl:text-5xl lg:text-3xl">Magazinul Nostru</h2>
        <h2 className="text-3xl lg:text-5xl xl:text-7xl font-semibold mt-5 mb-5">
          Produse Favorite
        </h2>
        <div className="flex flex-col lg:flex-row justify-between mt-20 lg:mt-32">
          {products.map((product) => {
            return <Product product={product} />;
          })}
        </div>
        <button className="text-3xl mt-20 bg-blue-700 py-2 px-5 lg:px-14 rounded-2xl animate-bounce lg:animate-none text-white">
          Vezi toate produsele
        </button>
      </div>
    </div>
  );
}
export default Magazin;
