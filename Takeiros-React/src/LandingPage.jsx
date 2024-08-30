import { Link } from "react-router-dom";
import HappyHourSpecials from "./Components/Specials/Specials";


function LandingPage() {

   return (
      <div className="landing-page">
        
         {/* Import and Add Links Here */}
         <Link to="/">
            <HappyHourSpecials />
         </Link>
         
      </div>
   )
}

export default LandingPage;
