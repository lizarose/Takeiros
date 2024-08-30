import './App.css'
import Navigation from './Components/NavBar/Navigation.jsx'
import { Outlet } from 'react-router-dom'
import Footer from "./Components/Footer/footer.jsx"
import HappyHourSpecials from './Components/Specials/Specials.jsx'
import Header from './Components/Header/Header.jsx'

function App() {

  return (
    <>
    {/* Do Not Add To This. Put Link in LandingPage.jsx */}
      <Navigation />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
