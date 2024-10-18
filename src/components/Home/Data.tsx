const Data = () => {
  return (
    <>
      <div className="h-full text-slate-500 ">
        <h1 className="lg:text-7xl md:text-6xl sm:text-6xl text-6xl font-semibold tracking-tight leading-none">
          Moid<span className="malik">Malik</span>
        </h1>
        <div className="subheading flex lg:mb-4 md:mb-4 sm:mb-2 mb-2 items-center lg:gap-4 sm:gap-2 gap-2 leading-none">
          <div className="line h-[1px] w-[8vw] bg-slate-800"></div>
          <p className="w-full leading-none tracking-widest lg:text-sm md:text-sm sm:text-xs text-xs">
            A Full-Stack Developer.
          </p>
        </div>
        <div className="desc">
          <p className="leading-none lg:text-sm md:text-sm sm:text-sm  text-sm tracking-tight lg:max-w-[28vw] sm:max-w-[68vw] max-w-[68vw]">
            Hi, I am Moid Malik. A Full-Stack developer based in Pakistan. I am
            very passionate and dedicated to my work.
          </p>
        </div>
        <div className=" lg:block md:flex md:items-center md:justify-between">
          <button className="bg-slate-800 flex justify-center items-center lg:gap-2 md:gap-2 sm:gap-1 gap-1 md:text-sm sm:text-sm text-sm lg:py-3 md:py-2 sm:py-2 py-2 md:px-3 sm:px-2 px-2 lg:w-[12.1vw] md:w-[13vw] rounded-lg mt-7 tracking-tighter text-white font-[500]">
            Say Hello
            <svg
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                fill="#fff"
              ></path>
              <path
                d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                fill="#fff"
              ></path>
            </svg>
          </button>
          <div className="lg:flex md:hidden sm:hidden hidden bg-slate-800 transition items-center lg:w-[12.1vw] md:w-[13vw] md:text-xs lg:gap-2 md:gap-2 rounded-lg lg:mt-24 tracking-tighter text-white font-[500] lg:py-2 md:py-1 md:mt-4 md:max-h-[8vw] lg:px-3 md:px-3">
          <svg
  width="32px"
  height="32px"
  className="home__scroll-mouse"
  viewBox="0 0 247 390"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  style={{
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 1.5,
  }}
>
  <path
    className="animate-wheel"
    d="M123.359,79.775l0,72.843"
    style={{
      fill: "none",
      stroke: "#fff",
      strokeWidth: "20px",
    }}
  />
  <path
    id="mouse"
    d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
    style={{
      fill: "none",
      stroke: "#fff",
      strokeWidth: "20px",
    }}
  />
</svg>


            <a
              href="#skills"
              className="scrollDown-button tracking-tight font-semibold flex items-center gap-1"
            >
              Scroll Down
              <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="picSec lg:block lg:ml-24 md:flex sm:flex flex  lg:max-h-[24vw] 
      ">
        <div className="pfpWrapper md:w-7/12 md:mr-[29.5vw] sm:w-[26vw] w-[35vw] sm:mx-4 mx-4 sm:mb-4 mb-4 animate-profile overflow-hidden">
          <img
            src="../assets/ownthecode.png"
            alt="Profile Pic"
          />
        </div>
      </div>
    </>
  );
};

export default Data;
