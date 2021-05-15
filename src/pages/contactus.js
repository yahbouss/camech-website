import './contactus.scss'

import WhereToBuy from '../components/HomeComponents/WhereToBuy/WhereToBuy.component'
import ContactUs from '../components/HomeComponents/ContactUs/ContactUs.Component'

const ContactUsPage = ()=>{
    return(
        <>
            <h1 className='page-title'>ContactUs</h1>
            <WhereToBuy/>
            <ContactUs/>
        </>
    )
}

export default ContactUsPage