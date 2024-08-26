import './App.css'
import Navigation from './Components/NavBar/Navigation.jsx'
import { Outlet } from 'react-router-dom'
import Footer from "./Components/Footer/Footer.jsx"

function App() {

  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
