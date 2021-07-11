import { Container, Row, Col, Card } from 'react-bootstrap'
import './OurProducts.scss'
import placeHolder from './placeHolder.png'

const OurProducts = () =>{
    return (
        <Container className='product' fluid='xl'>
            <Row>
                <Col lg='2'>
                    <h1 className='product__title'>OUR PRODUCTS</h1>
                </Col>
                <Col >
                    <div className='p-card'>
                        <div className="p-card__img">
                            <Card.Img className='product__card-img' variant="top" src={placeHolder} />
                        </div>
                    
                        <div className="p-card__body">
                            <p className="p-card__paragraph">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col >
                    <Card className='product__cards'>
                        <Card.Img className='product__card-img' variant="top" src={placeHolder} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className='product__cards'>
                        <Card.Img className='product__card-img' variant="top" src={placeHolder} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default OurProducts