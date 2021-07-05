import ContactUs from '../components/HomeComponents/ContactUs/ContactUs.Component'
import Hero from '../components/HomeComponents/Hero/Hero.component'
import OurGoal from '../components/HomeComponents/OurGoals/OurGoals.component'
import OurProducts from '../components/HomeComponents/OurProducts/OurProducts.component'
import WhereToBuy from '../components/HomeComponents/WhereToBuy/WhereToBuy.component'

const Home = () =>{
    return(
        <>
            <Hero/>
            <OurProducts/>
            <OurGoal/>
            <WhereToBuy/>
            <ContactUs/>
        </>
    )
}

export default Home