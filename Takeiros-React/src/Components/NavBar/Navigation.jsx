import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    return (
        <Navbar light expand="md" className="fixed-top NavBar" id="navbar-margin">
            <Nav className="me-auto" navbar>
                <NavbarBrand href="/" className="text-light">
                    <p>Takeiros</p>
                </NavbarBrand>
                <NavItem>
                    <Link to='/' className="nav-link text-light">Home</Link>
                </NavItem>
                <NavItem>
                    <Link to='/Menu' className="nav-link text-light">Menu</Link>
                </NavItem>

            </Nav>
        </Navbar>
    )
}
export default Navigation;