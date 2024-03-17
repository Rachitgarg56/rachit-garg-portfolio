
import Navbar from "./Navbar";
import About from './About';

const MainContent = () => {
  return (
    <div className="main-content w-full rounded-3xl relative bg-cyan-700">
      <Navbar/>
      <About/>
    </div>
  )
}

export default MainContent;
