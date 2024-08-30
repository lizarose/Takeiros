import './App.css'
import Navigation from './Components/NavBar/Navigation.jsx'
import { Outlet } from 'react-router-dom'
import Footer from "./Components/Footer/footer.jsx"
import HappyHourSpecials from './Components/Specials/Specials.jsx'
import Header from './Components/Header/Header.jsx'

function App() {

  return (
    <>
      <Navigation />
      <Outlet />
      <Header />
      <HappyHourSpecials />
      <Footer />
    </>
  )
}

export default App;
