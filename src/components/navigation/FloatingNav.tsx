import { useState } from "react";
const FloatingNav = () => {
  const [toggle, showNav] = useState(false);

  return (
    <div
      className={`floatingNav md:text-2xl lg:hidden fixed bottom-0 left-0 right-0 w-full h-[48vw] bg-zinc-300 z-10 shadow rounded-t-2xl transition-all duration-500 ease-in-out ${
        toggle ? "h-[48vw] animate-slideUp" : " md:h-16 sm:h-[8.5vw] h-[8.5vw]"
      }`}
    >
      <div
        className="navToggle flex items-center justify-between sm:px-6 px-6 sm:pt-4 pt-4 cursor-pointer"
        onClick={() => showNav(!toggle)}
      >
        <h1 className="font-md md:text-3xl sm:text-xl text-xl tracking-tighter">
          Moid
        </h1>
        <i
          className={`ri-arrow-${
            toggle ? "down" : "up"
          }-line md:text-3xl sm:text-xl text-xl`}
        ></i>
      </div>
      <div
        className={`list flex flex-wrap justify-evenly sm:px-8 md:px-6 px-8 md:pt-20  sm:pt-6 pt-6 pb-12 w-full ${
          toggle ? "h-full" : "hidden"
        }`}
      >
        <div className="li flex flex-col w-1/3 text-center">
          <i className="ri-home-line"></i>
          <a href="#home">Home</a>
        </div>
        <div className="li flex flex-col w-1/3 text-center">
          <i className="ri-user-line"></i>
          <a href="#about">About</a>
        </div>
        <div className="li flex flex-col w-1/3 text-center">
          <i className="ri-file-code-line"></i>
          <a href="#skills">Skills</a>
        </div>
        <div className="li flex flex-col w-1/3 text-center">
          <i className="ri-briefcase-line"></i>
          <a href="#services">Services</a>
        </div>
        <div className="li flex flex-col w-1/3 text-center">
          <i className="ri-landscape-line"></i>
          <a href="#portfolio">Portfolio</a>
        </div>
        <div className="li flex flex-col w-1/3 text-center">
          <i className="ri-send-plane-2-line"></i>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default FloatingNav;
