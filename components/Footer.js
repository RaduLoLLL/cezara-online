import Image from "next/image";
export default function Footer() {
  return (
    <div className="flex flex-col items-center ">
      <h2 className="text-3xl">Contacteaza-ne</h2>
      <div className="mt-20 flex flex-col lg:flex-row mb-10 lg:ml-0">
        <div className="flex flex-col lg:flex-row items-center my-10 lg:my-0 lg:mx-12">
          <Image src="/house.svg" width={70} height={70} />
          <h3 className="text-2xl font-light ml-5">
            Strada Stadionului Nr. 4A
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:mx-12 my-10 lg:my-0">
          <Image src="/phone.svg" width={70} height={70} />
          <h3 className="text-2xl font-light ml-5">+(40) 75 112 0810</h3>
        </div>
        <div className="flex flex-col lg:flex-row lg:ml-0 items-center lg:mx-12 my-10 lg:my-0">
          <svg
            className="w-14 h-14 text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h3 className="text-2xl font-light ml-5">
            contact@cezaraconstruct.com
          </h3>
        </div>
      </div>
      <Image src="/footerBg.svg" width={1920} height={479} />
    </div>
  );
}
