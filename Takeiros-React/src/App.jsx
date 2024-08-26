import './App.css'
import Navigation from './Components/NavBar/Navigation.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default App;
