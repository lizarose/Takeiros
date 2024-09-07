import { Link } from "react-router-dom";
import HappyHourSpecials from "./Components/Specials/Specials";
import About from "./Components/AboutSection/About";


function LandingPage() {

   return (
      <div className="landing-page">
        
         {/* Import and Add Links Here */}
            <About />
            <HappyHourSpecials />
      </div>
   )
}

export default LandingPage;
