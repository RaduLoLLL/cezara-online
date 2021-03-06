import React from "react";
import Product from "./Product";
import Image from "next/image";
function Magazin({ products }) {
  products.length = 4;
  return (
    <div className="pb-32">
      <div className="flex flex-col items-center mt-20">
        <Image src="/magazinul.png" width={512} height={96} />

        <h2 className="text-3xl lg:text-5xl xl:text-7xl font-semibold mt-5 mb-5">
          Produse Favorite
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-between mt-20 lg:mt-32">
          {products.map((product) => {
            return <Product key={product.Image.id} product={product} />;
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
