import Tiles from "./Tiles"
import FileSVG from "./FileSVG"
const About = () => {
  return (
    <div id="about" className="about lg:py-12  flex flex-col gap-4 justify-center items-center w-full h-full overflow-hidden md:mt-24 sm:mt-24 mt-24">
        <div className="lg:w-[24vw] md:w-[45vw] sm:w-[48vw] w-[80vw]">
            <img
            src="https://images.pexels.com/photos/29002886/pexels-photo-29002886.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="picture was supposed to be here."
            className="rounded-3xl"
            />
        </div>
        <Tiles/>
        <p className="text-center text-slate-600 tracking-tight max-w-[64vw] text-sm ">Hi, my name is Moid, and I am a passionate full stack web and mobile apps developer. I specialize in creating user-friendly applications that provide seamless experiences across various devices and platforms.</p>
        <a className="flex text-md items-center gap-1 py-4 px-6 bg-zinc-700 hover:bg-zinc-700/95 rounded-xl text-white tracking-tight"
        href="/src/components/about/Moid-Cv.pdf"
        download={"Moid-Cv.pdf"}
        >
        Download CV <span className="mb-[3px]"><FileSVG/></span>
        </a>
    </div>
  )
}

export default About
