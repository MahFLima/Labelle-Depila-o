import { useRef, useState } from "react";
import { About } from "../components/About";
import { Brief } from "../components/Brief";
import { Contato } from "../components/Contato";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { MobileMenu } from "../components/MobileMenu";
import { Services } from "../components/Services";

export function Page() {
  const [isActive, setIsActive] = useState(false);

  const btnRef = useRef<HTMLButtonElement>(null);

  function navToggle() {
    btnRef.current?.classList.toggle("open");
    {
      isActive ? setIsActive(false) : setIsActive(true);
    }
  }
  return (
    <div className="flex flex-col w-full h-full">
      <header className="flex justify-between items-center py-6 px-6 lg:px-32 border-b border-gray-300 bg-gray-100 md:grid-cols-2">
        <strong className="font-serif text-2xl text-black">Labelle <span className="text-pink-500">Depilação</span></strong>
        <div className="hidden md:flex gap-8 text-black">
        <a className="hover:text-pink-500" href="#home">Home</a>
        <a className="hover:text-pink-500" href="#about">Sobre</a>
        <a className="hover:text-pink-500" href="#services">Serviços</a>
        <a className="hover:text-pink-500" href="#brief">Depoimentos</a>
        <a className="hover:text-pink-500" href="#contato">Contato</a>
        </div>
        <button
          className="hamburger block md:hidden focus:outline-none"
          type="button"
          ref={btnRef}
          onClick={navToggle}
        >
          <span className="hamburger__top-bun bg-pink-500"></span>
          <span className="hamburger__bottom-bun bg-pink-500"></span>
        </button>
      </header>
      {isActive ? (
        <MobileMenu />
      ) : (
        <>
          <Home />
          <About />
          <Services />
          <Brief />
          <Contato />
          <Footer />
        </>
      )}
    </div>
  );
}
