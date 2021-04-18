import { Container, Form, Col } from 'react-bootstrap'
import { useState } from 'react'
import './contactUs.scss'

const ContactUs = () =>{
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Message, setMessage] = useState('')

    const submitForm = () =>{
        console.log(Name + ' ' + Email + ' ' + Message)
    }

    return (
        <Container fluid='xl' className='form'>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    value={Name} 
                    type="text" 
                    placeholder="John Doe" 
                    onChange={e => setName(e.target.value)}
                    />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    value={Email} 
                    type="email" 
                    placeholder="Password"
                    onChange={e => setEmail(e.target.value)} 
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                    value={Message} 
                    className='form__message' 
                    as="textarea" 
                    placeholder="Your message here..." 
                    onChange={e => setMessage(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <button className='btn-submit' onClick={submitForm}>Submit</button>
        </Container>
    )
}

export default ContactUs