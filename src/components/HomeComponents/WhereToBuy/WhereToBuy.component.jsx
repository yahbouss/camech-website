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
                    <h1 className='buy__title'>TO BUY<br/>WHERE</h1>
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
                            <FaFacebookSquare style={{fontSize:'28px'}} className='icon'/>
                        </Col>
                        <Col lg='3'>
                            <a href='https://www.facebook.com/camech.upcycles'>
                                <button className='btn'>Follow</button>
                            </a>
                        </Col>
                        <Col lg='1'>
                            <AiFillInstagram style={{fontSize:'30px'}} className='icon'/>
                        </Col>
                        <Col lg='3'>
                            <a href='https://www.instagram.com/camech.upcycles'>
                                <button className='btn'>Follow</button>
                            </a>
                        </Col>
                    </Row>
                </Col>
                <Col lg='7'>
                    <a href='https://www.barbecha.shop'>
                        <button className='btn btn__big'>
                            Visit our partner's website
                        </button>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default WhereToBuy