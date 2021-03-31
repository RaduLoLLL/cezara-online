import Image from "next/image";

export default function Main() {
  return (
    <div>
      <Image src="/Pattern.svg" width={1920} height={440} />

      <div className="flex flex-col-reverse lg:flex-row">
        <div className=" w-100 lg:w-4/12">
          <div className="flex ml-20 mt-20 items-center">
            <div>
              <Image src="/Num1.svg" width={300} height={300} />
            </div>
            <div className="ml-5 text-center px-5 lg:px-0">
              <h1 className="text-3xl">Gustul Dulce Natural</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's{" "}
              </p>
            </div>
          </div>
          <div className="flex ml-20 mt-20 items-center">
            <div>
              <Image src="/Num2.svg" width={300} height={300} />
            </div>
            <div className="ml-5 text-center px-5 lg:px-0">
              <h2 className="text-3xl">Tratament Adjuvant</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's{" "}
              </p>
            </div>
          </div>
          <div className="flex ml-20 mt-20 items-center">
            <div>
              <Image src="/Num3.svg" width={300} height={300} />
            </div>
            <div className="ml-5 text-center px-5 lg:px-0">
              <h1 className="text-3xl">Fără Conservanți</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center mt-10 lg:-mt-20">
          <h2 className="text-5xl">Bun Venit</h2>
          <h2 className="text-7xl font-semibold mt-5 mb-5">
            În Cămara Noastră
          </h2>
          <Image src="/bunVenit.png" width={953} height={510} />
        </div>
      </div>
    </div>
  );
}
