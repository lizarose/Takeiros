import './App.css'
import Navigation from './Components/NavBar/Navigation.jsx'
import { Outlet } from 'react-router-dom'
import Footer from "./Components/Footer/footer.jsx"
import HappyHourSpecials from './Components/Specials/Specials.jsx'

function App() {

  return (
    <>
      <Navigation />
      <Outlet />
      <HappyHourSpecials />
      <Footer />
    </>
  )
}

export default App;
