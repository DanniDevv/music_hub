function home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="section py-16 md:py-36 w-full mx-auto container lg:max-w-4xl md:max-w-2xl ">
        <h1 className="text-6xl text-center font-bold mt-8 mb-16">
          <span className=" hover:text-red-600">Echo-Hub</span>
        </h1>
        <h2 className="text-2xl text-center italic mt-8 mb-16">
          Tu destino musical todo en uno. Escucha, descarga y personaliza tu
          música favorita con facilidad y calidad excepcionales
        </h2>
        <div className="flex justify-center">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Proximamente en Movil 🚀
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default home;
