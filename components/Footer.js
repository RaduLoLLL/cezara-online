import Image from "next/image";
export default function Footer() {
  return (
    <div className="flex flex-col items-center ">
      <h2 className="text-3xl">Contacteaza-ne</h2>
      <div className="mt-20 flex flex-col lg:flex-row mb-10">
        <div className="flex items-center my-10 lg:my-0 lg:mx-12">
          <Image src="/house.svg" width={70} height={70} />
          <h3 className="text-2xl font-light ml-5">
            Strada Stadionului Nr. 4A
          </h3>
        </div>
        <div className="flex items-center lg:mx-12 my-10 lg:my-0">
          <Image src="/phone.svg" width={70} height={70} />
          <h3 className="text-2xl font-light ml-5">+(40) 75 112 0810</h3>
        </div>
        <div className="flex ml-5 lg:ml-0 items-center lg:mx-12 my-10 lg:my-0">
          <Image src="/email1.svg" width={70} height={70} />
          <h3 className="text-2xl font-light ml-5">
            contact@cezaraconstruct.com
          </h3>
        </div>
      </div>
      <Image src="/footerBg.svg" width={1920} height={479} />
    </div>
  );
}
