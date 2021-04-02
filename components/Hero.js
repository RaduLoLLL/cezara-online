export default function Hero() {
  return (
    <div className="text-white mt-20 px-3 text-center  relative lg:text-left lg:absolute lg:w-4/12 lg:bottom-24 lg:right-0">
      <h1 className="text-6xl font-semibold text-gradient bg-gradient-to-b from-yellow-600 to-yellow-500">
        Miere Naturala
      </h1>
      <h3 className="text-3xl mt-5">Nou!</h3>
      <p className="text-lg mt-16 px-10 lg:px-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia
        finibus dapibus. Maecenas non efficitur orci, eget lobortis sapien.
        Curabitur elit quam, gravida quis leo ut, tempor aliquam elit.
      </p>
      <button className="text-3xl mt-20 bg-blue-700 py-2 px-14 rounded-2xl animate-bounce lg:animate-none">
        Cumpara!
      </button>
    </div>
  );
}
