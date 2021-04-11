import './NavigationBar.scss'
import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../../shared/assets/Camech Logo.svg'

const NavigationBar = () =>{
    return (
        <Container fluid="xl">
            <Navbar collapseOnSelec sticky="top" variant="dark" className='Nav'>
                <Navbar.Brand href="#">
                    <img 
                    src={Logo} 
                    alt='camech'
                    className="d-inline-block align-top Nav__Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle expand="sm" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end Nav__List">
                        <Nav>
                            <Nav.Link style={{color:'white'}} className='Nav__List-link'  href="#home">Home</Nav.Link>
                            <Nav.Link style={{color:'white'}} className='Nav__List-link'  href="#link">Goals</Nav.Link>
                            <Nav.Link style={{color:'white'}} className='Nav__List-link'  href="#link">Where to buy ?</Nav.Link>
                            <Nav.Link style={{color:'white'}} className='Nav__List-link'  href="#link">Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default NavigationBar