
const Tiles = () => {
  const tileData = [
    {
      icon: <i className="ri-award-line text-xl text-slate-800 "></i>,
      title: "Experience",
      desc: "8+ years worked",
    },
    {
      icon: <i className="ri-briefcase-line text-xl text-slate-800 "></i>,
      title: "Projects",
      desc: "20+ completed",
    },
    {
      icon: <i className="ri-customer-service-line text-xl text-slate-800 "></i>,
      title: "Education",
      desc: "Computer Science",
    },
  ];

  return (
    <div className="tiles flex justify-center gap-4 w-full">
      {tileData.map((tile, index) => (
        <div key={index} className="tile flex flex-col items-center justify-center bg-slate-100 border-[1px] border-slate-500 lg:py-4 md:py-3  sm:py-3 py-3 lg:px-8 md:px-4 sm:px-2 px-2 sm:text-sm text-sm rounded-lg ">
          {tile.icon}
          <h3 className="tracking-tight font-light">{tile.title}</h3>
          <p className="text-[13px] text-center tracking-tighter font-md text-slate-600">{tile.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Tiles;
