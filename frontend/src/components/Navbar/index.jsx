import home from "../../assets/home.svg";
function Navbar() {
  return (
    <>
      <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-10">
        <nav className="flex px-3 justify-center gap-6 border-2 rounded-full bg-slate-800 text-white text-xl ">
          <a className="relative block px-2 py-2 transition " href="/">
            <img
              src={home}
              alt="home"
              className="hover:scale-110 transform transition duration-300 ease-in-out w-6 h-6 "
            />
          </a>
          <a
            className="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
            href="/musica"
          >
            Musica
          </a>
          <a
            className="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
            href="/about"
          >
            About
          </a>
          <a
            className="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
            href=""
          >
            Code
          </a>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
