import React, {Component} from 'react';
import {Card, Button, Container, Row, Col, Form} from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import './TrainList.css';

export default class TrainList extends Component{
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col md={3} sm={4}>
                        <div style={{backgroundColor: 'red'}}>Sidebar</div>
                    </Col>

                    <Col md={9} sm={4}>

                        {/* <Card>
                            <Row>
                                <Col></Col>
                                <Col></Col>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                        </Card> */}
                                       
                        <Card style={{marginBottom: '1%', padding:'1%'}}>
                            <Row>
                                <Col md={3}>
                                    <Card.Title>Arunachal Exp</Card.Title>
                                    <Card.Text>Departs on: Wed & Sun</Card.Text>
                                </Col>
                                <Col md={2}>Departs Arrives Duration</Col>
                                <Col md={3}>
                                    <Form.Control as="select">
                                        <option>AC First Class(1A)</option>
                                        <option>AC 2 Tier(2A)</option>
                                        <option>AC 3 Tier(3A)</option>
                                        <option>SLEEPER(SL)</option>
                                    </Form.Control>
                                </Col>
                                <Col md={4}>
                                    <Button variant="primary" className='ml-5'>Check availability & fare</Button>
                                </Col>
                            </Row>
                        </Card>

                    </Col>
                </Row>
            </Container>
        )
    }
}