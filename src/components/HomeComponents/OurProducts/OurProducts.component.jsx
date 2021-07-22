import { Container, Row, Col, Card } from 'react-bootstrap'
import './OurProducts.scss'
import placeHolder from './placeHolder.png'

const Products = [
    {
        name: "veste",
        pic: placeHolder,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        name: "veste",
        pic: placeHolder,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        name: "veste",
        pic: placeHolder,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
]

const OurProducts = () =>{
    return (
        <Container className='product' fluid='xl'>
            <Row>
                <Col lg='2'>
                    <h1 className='product__title'>OUR PRODUCTS</h1>
                </Col>
                {Products.map(product =>(
                    <Col >
                    <div className='p-card'>
                        <div className="p-card__img">
                            <Card.Img className='product__card-img' variant="top" src={product.pic} />
                        </div>
                    
                        <div className="p-card__body">
                            <p className="p-card__paragraph">
                            {product.description}
                            </p>
                        </div>
                    </div>
                </Col>
                ))}
                
            </Row>
        </Container>
    )
}

export default OurProducts