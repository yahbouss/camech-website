import './Footer.scss'
import camechLogo from '../../shared/assets/Camech Logo.svg'
import { Container } from 'react-bootstrap'

const Footer = () =>{
    return (
        <div className="footer">
            <Container fluid="xl">
                <img className='footer__logo' src={camechLogo} alt='logo'/>
                <h1 className='footer__copyrights'>Camèch © 2021 - All rights reserved.</h1>
            </Container>
        </div>
    );
}

export default Footer