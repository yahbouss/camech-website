import './NavigationBar.scss'
import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../../shared/assets/Camech Logo.svg'
import { Link, Route, Switch } from 'react-router-dom'

const NavigationBar = () =>{
    return (
        <Container fluid="xl">
            <Navbar collapseOnSelec sticky="top" variant="dark" className='Nav'>
                <Navbar.Brand as={Link} to="/" href="#">
                    <img 
                    src={Logo} 
                    alt='camech'
                    className="d-inline-block align-top Nav__Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle expand="sm" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end Nav__List">
                        <Nav>
                            <Nav.Link style={{color:'#2A9318'}} className='Nav__List-link'  href="/">Home</Nav.Link>
                            <Nav.Link style={{color:'#2A9318'}} className='Nav__List-link'  href="/goals">Goals</Nav.Link>
                            <Nav.Link style={{color:'#2A9318'}} className='Nav__List-link'  href="http://barbecha.shop">Shop</Nav.Link>
                            <Nav.Link style={{color:'#2A9318'}} className='Nav__List-link'  href="/contactus">Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path='/' />
                <Route exact path='/goals' />
                <Route exact path='/wheretobuy' />
                <Route exact path='/contactus' />
            </Switch>
        </Container>
    )
}

export default NavigationBar