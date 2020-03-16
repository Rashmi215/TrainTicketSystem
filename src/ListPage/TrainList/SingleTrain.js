import React from 'react';
import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import './TrainList.css';

export default function SingleTrain(props) {
    return(
        <Card className='card-style' key={props.item.id}>
            <Row>
                <Col>
                    <Card.Text><b>{props.item.name}</b>({props.item.trainno})</Card.Text>
                    <Card.Text><b style={{color: 'blue'}}>Departs on:</b> {props.item.departs}</Card.Text>
                </Col>
                <Col>
                    <Row>
                        <Col>{props.item.depart_time}</Col>
                        <Col>{props.item.arrival_time}</Col>
                        <Col>{props.item.duration_time}</Col>
                    </Row>
                </Col>
                <Col>
                    <Form.Control as="select">
                        {props.item.class.map((item2, i) => {
                            return <option key={i}>{item2}</option>
                        })}
                    </Form.Control>
                </Col>
                <Col>
                    <Button variant="primary">Check availability & fare</Button>
                </Col>
            </Row>
        </Card> 
    )
}