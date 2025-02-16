import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'



function Home() {

    return (


        <Container>
            {/* <nav>< ColorSchemesExample /></nav> */}
            <Container className="container-fluid p-5 bg-primary text-white text-center">

            </Container>

            <Row style={{ height: "60px" }}>

            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Img />
                        <Card.Body>
                            <Card.Title>
                                Card Example
                            </Card.Title>
                            <Card.Text>
                                This is an example of react bootstrap cards
                            </Card.Text>
                            <Button variant="secondary">Read more</Button>

                        </Card.Body>

                    </Card>
                </Col>
            </Row>
            <Row>

                <Col><Card></Card></Col>

                <Col><Card></Card></Col>
            </Row>
            <Row>

                <Col><Card></Card></Col>
                <Col><Card></Card></Col>
                <Col><Card></Card></Col>
            </Row>




        </Container>

        //  <h1>Cubicx Home</h1>
        // <p>Welcome to Cubicx Home page</p>

        // <button id="btn" onClick={() => setCount((count) => count + 1)} >count is {count}</button>
        // <p id="demo">Oops.. something went wrong</p>
        // <div>{myList}</div> 



    )

}

export default Home