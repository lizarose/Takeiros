import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar color="primary" light expand="md" className="fixed-top" id="navbar-margin">
            <Nav className="me-auto" navbar>
                <NavItem>
                    <Link to='/' className="nav-link white-text">Home</Link>
                </NavItem>

            </Nav>
        </Navbar>
    )
}
export default Navigation;