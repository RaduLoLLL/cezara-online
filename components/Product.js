import Image from "next/image";

import styles from "../styles/Product.module.css";
export default function Product({ product }) {
  return (
    <div className="lg:mx-10 border text-center pb-5  lg:w-56 mb-10 lg:mb-0">
      <div className={styles.imageBg}>
        <Image src={product.Image.url} width={300} height={300} />
      </div>
      <h2 className="text-3xl">{product.Nume}</h2>
      <h3 className={`${styles.red} mt-5 text-2xl`}>{product.Pret}LEI</h3>
      <button className="mt-10 text-3xl text-white bg-yellow-500 py-2 px-5 lg:px-5 rounded-2xl">
        Cumpara
      </button>
    </div>
  );
}
