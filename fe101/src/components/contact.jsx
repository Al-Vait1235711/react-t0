import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



function AppContact() {
    return (
        <section id='contact' className='block contact-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Contact us</h2>
                    <div className='subtitle'> get connected with us</div>
                </div>
                <Form className='contact-form'>
                    <Row>
                        <Col sm={4}>
                            <Form.Control type='text' placeholder="Enter your full name" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type='email' placeholder="Enter your email address" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type='tel' placeholder="Enter your contact number" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control as="textarea" placeholder="Enter your contact message" required />
                        </Col>
                    </Row>
                    <div className='btn-holder'>
                        <Button type='submit'>Subnit</Button>
                    </div>
                </Form>
            </Container>
            <div className='google-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.7348219016485!2d0.04043039232429171!3d51.3895515888019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8aa55890ba41f%3A0x9b0d5750f3d792f4!2s1%20Turpington%20Ln%2C%20Bromley%20BR2%208JA!5e0!3m2!1sen!2suk!4v1739727974435!5m2!1sen!2suk" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container fluid>
                <div className='contact-info'>
                    <ul>
                        <li><i className='fas fa-envelope'></i>hello@company.com</li>
                        <li><i className='fas fa-phone'></i>+44 207 5555 555</li>
                        <li><i className='fas fa-map-marker-alt'></i>London, United Kingdom</li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default AppContact