import { Col, Container, Row } from 'react-bootstrap'
import './whereToBuy.scss'

import { GrMail } from 'react-icons/gr';
import { FaPhoneAlt, FaFacebookSquare } from 'react-icons/fa'
import { IoMdPin } from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'


const WhereToBuy = () =>{
    return(
        <Container fluid='xl' className='buy'>
            <Row>
                <Col lg='2'>
                    <h1 className='buy__title'>WHERE<br/>TO BUY</h1>
                </Col>
                <Col lg="3">
                    <Row>
                        <h2 className="buy__subtitle">Contact info</h2>
                        <p>
                            <GrMail className='icon'/>
                            Email: Enactus@smu.tn
                        </p>
                        <p>
                            <FaPhoneAlt className='icon'/>
                            phone: +216 50 995 229
                        </p>
                        <p>
                            <IoMdPin className='icon'/>  
                            Address: Les Berges du Lac II 
                            Walkway, Tunis
                        </p>
                    </Row>    
                    <Row>
                        <Col lg='1'>
                            <FaFacebookSquare className='icon'/>
                        </Col>
                        <Col lg='3'>
                            <button className='btn'>Follow</button>
                        </Col>
                        <Col lg='1'>
                            <AiFillInstagram className='icon'/>
                        </Col>
                        <Col lg='3'>
                            <button className='btn'>Follow</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default WhereToBuy