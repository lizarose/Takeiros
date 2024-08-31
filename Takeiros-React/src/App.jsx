import './App.css'
import Navigation from './Components/NavBar/Navigation.jsx'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from "./Components/Footer/footer.jsx"
import HappyHourSpecials from './Components/Specials/Specials.jsx'
import Header from './Components/Header/Header.jsx'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.jsx'

function App() {
  const location = useLocation();

  const isPrivacyPolicyPage = location.pathname === '/privacy';

  return (
    <>
    {/* Do Not Add To This. Put Link in LandingPage.jsx */}
      <ScrollToTop />
      <Navigation />
      {!isPrivacyPolicyPage && <Header />}
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
