import Tile from "./Tile"

const Skills = () => {
  return (
    <main id="skills" className="flex flex-col items-center text-center lg:py-6 md:py-12 gap-12">
      <div className="headings flex flex-col tracking-tight ">
        <h1 className="text-5xl">Skills.</h1>
        <p className="tracking-wider lg:text-sm text-slate-600">My technical level</p>
      </div>  
      <div className=" flex w-full lg:justify-evenly md:justify-evenly sm:items-center lg:items-start md:items-start items-center lg:flex-row md:flex-row sm:flex-col flex-col lg:gap-0 md:gap-0 sm:gap-4 gap-4">
  <Tile />
</div>

    </main>
  )
}

export default Skills