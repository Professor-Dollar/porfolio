import Data from "./Data"
import Social from "./Social"

const Home = () => {
  return (
    <div id="home" className="home flex w-full lg:pt-0 sm:pt-24 md:pt-24 pt-24 h-full lg:px-48 md:px-[10.5vw] sm:px-2 px-4">
    <Social/>
    <div className="rightSec lg:px-14 md:px-8 sm:px-6 px-4 h-full lg:mt-[12vw] md:mt-[8vw] sm:mt-[12vw] mt-[12vw] flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse flex-col-reverse w-full">
      <Data/>
    </div>
  </div>  )
}

export default Home