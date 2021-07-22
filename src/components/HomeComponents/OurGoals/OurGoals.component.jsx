import { Container } from 'react-bootstrap'
import './OurGoal.scss'
import goal from './goal.svg'
import { Row, Col } from 'react-bootstrap'
//import warka from './warka.svg'

const OurGoal = ()=>{
    return(
        <>
            <Container fluid='xl'> 
                <Row className="goal">
                    <Col xs={{order: "last"}} md={{order: "first", cols: 3}}>
                        <img className="goal__icon" src={goal} alt='' />
                    </Col>
                    <Col md="7">
                        <h2>Make Tunisia Great Again !</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor natus voluptates architecto explicabo rerum modi tenetur ipsa numquam ducimus quidem temporibus at, et atque excepturi voluptatibus sunt totam veritatis eaque dicta! Hic iste esse consequatur cum corporis neque magnam iure inventore numquam saepe maxime beatae unde reiciendis, veritatis dolorum voluptas.</p>
                    </Col>
                    <Col xs={{order: "first"}} md={{order: "last", cols: 2}}><h1 className="goal__title">OUR<br/>GOAL</h1></Col>
                </Row>
            </Container>
            {/* <img className='warka' src={warka} alt=''/> */}
        </>
    )
}

export default OurGoal