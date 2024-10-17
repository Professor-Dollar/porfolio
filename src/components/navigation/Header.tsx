const Header = () => {
  return (
    <header className="lg:flex bg-white fixed md:hidden sm:hidden hidden z-10  w-full items-center justify-between lg:px-52 md:px-[12vw] lg:h-[6vw] md:h-[8vw] shadow">
      <div className="leftNav font-medium text-xl">Moid</div>
      <div className="rightNav">
        <div className="flex gap-4 navList leading-none tracking-tight">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </header>
  )
}

export default Header