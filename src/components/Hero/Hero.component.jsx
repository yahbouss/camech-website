import './hero.scss'
import { Container } from "react-bootstrap"

const HeroPlaceholder = "https://www.mecojax.com/wp-content/uploads/2017/02/hero-image-placeholder-670x270.png"

const Hero = () =>{
    return(
        <Container fluid className="Hero">
            <img className="Hero__img" src={HeroPlaceholder} alt='Hero'/>
        </Container>    
    )
}

export default Hero