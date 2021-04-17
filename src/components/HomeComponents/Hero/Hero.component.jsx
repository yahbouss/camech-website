import './hero.scss'
import hero from '../../../shared/assets/Hero.jpg'

const Hero = () =>{
    return(
        <div className="hero">
            <div className="hero__img">
                <img src={hero} alt='Hero-img'/>
            </div>
                <div className='hero__content'> 
                    <button className="hero__content-btn">WHERE TO BUY ?</button>
                        {/* <h1>Lorem ipsum dolor sit amet. </h1>
                        <p className='hero__content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nemo facilis repudiandae sequi ducimus corporis quasi officia in repellat unde!</p> */}
                </div>
        </div>    
    )
}

export default Hero