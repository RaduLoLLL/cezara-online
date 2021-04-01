import Image from "next/image";
import styles from "../styles/Main.module.css";

export default function Main() {
  return (
    <div>
      <div className="hidden lg:block bg-gradient-to-b from-yellow-600 to-yellow-400">
        <Image src="/Pattern.svg" width={1920} height={440} />
      </div>

      <div className="flex flex-col-reverse lg:flex-row">
        <div className=" w-100 lg:w-4/12">
          <div className="flex ml-5 lg:ml-20 mt-20 items-center">
            <div>
              <Image src="/Num1.svg" width={300} height={300} />
            </div>
            <div className="ml-5  px-5 lg:px-0">
              <h1 className="text-xl xl:text-2xl font-semibold">
                Gustul Dulce Natural
              </h1>
              <p className="text-sm xl:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's{" "}
              </p>
            </div>
          </div>
          <div className="flex ml-5 lg:ml-20 mt-20 items-center">
            <div>
              <Image src="/Num2.svg" width={300} height={300} />
            </div>
            <div className="ml-5  px-5 lg:px-0">
              <h2 className="text-xl xl:text-2xl font-semibold">
                Tratament Adjuvant
              </h2>
              <p className="text-sm xl:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's{" "}
              </p>
            </div>
          </div>
          <div className="flex ml-5 lg:ml-20 mt-20 items-center">
            <div>
              <Image src="/Num3.svg" width={300} height={300} />
            </div>
            <div className="ml-5  px-5 lg:px-0">
              <h1 className="text-xl xl:text-2xl font-semibold">
                Fără Conservanți
              </h1>
              <p className="text-sm xl:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center text-center items-center mt-10 lg:-mt-20 lg:ml-10 px-10">
          {/*<h2 className={`text-xl xl:text-5xl lg:text-3xl`}>Bun Venit</h2>*/}
          <Image src="/bunVenit.svg" width={405} height={198} />
          <h2 className="text-3xl lg:text-5xl xl:text-7xl font-semibold mt-5 mb-5">
            În Cămara Noastră
          </h2>
          <Image src="/bunVenit.png" width={953} height={510} />
        </div>
      </div>
      <div className={`mt-10 ${styles.patternBg}`}>
        <Image src="/patternBottom.svg" width={1920} height={205} />
      </div>
    </div>
  );
}
