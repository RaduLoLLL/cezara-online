import Image from "next/image";
import styles from "../styles/Features.module.css";
export default function Features() {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row py-32 items-center ">
        <div className=" ml-16  lg:max-w-md">
          <Image src="/delivery.svg" width={200} height={200} />
          <h2 className="text-3xl font-semibold">Livrare Rapidă & Sigură</h2>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </p>
          <div className={`flex items-baseline mt-5 lg:mt-24 ${styles.gray}`}>
            <h3 className=" text-7xl">01</h3>
            <div className="ml-10">
              <Image src="/line.svg" width={200} height={3} />
            </div>
          </div>
        </div>

        <div className=" ml-16 mt-32 lg:mt-0 lg:max-w-md">
          <div className={`hidden lg:flex items-baseline mb-24 ${styles.gray}`}>
            <h3 className=" text-7xl">02</h3>
            <div className="ml-10">
              <Image src="/line.svg" width={200} height={3} />
            </div>
          </div>
          <Image src="/cashback.svg" width={200} height={200} />
          <h2 className="text-3xl font-semibold">Banii Înapoi Garantat</h2>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </p>
          <div className={`flex lg:hidden items-baseline mt-5 ${styles.gray}`}>
            <h3 className=" text-7xl">02</h3>
            <div className="ml-10">
              <Image src="/line.svg" width={200} height={3} />
            </div>
          </div>
        </div>

        <div className=" ml-16 mt-32 lg:mt-0 lg:max-w-md">
          <Image src="/callCenter.svg" width={200} height={200} />
          <h2 className="text-3xl font-semibold">Suport Telefonic 24/7</h2>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </p>
          <div className={`flex items-baseline mt-5 lg:mt-24 ${styles.gray}`}>
            <h3 className=" text-7xl">03</h3>
            <div className="ml-10">
              <Image src="/line.svg" width={200} height={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
