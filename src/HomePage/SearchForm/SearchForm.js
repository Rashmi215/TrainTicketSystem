import React,{Component} from 'react';
import {Card, Button, Form} from 'react-bootstrap';
import './SearchForm.css';

export default class SearchForm extends Component{
    render(){
        return(
            <Card className='search-form' bg="info" text="light">
                <Card.Body>

                    <Form>
                        <Form.Group>
                            <Form.Label>From</Form.Label>
                            <Form.Control type="text" placeholder="Enter source station" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>To</Form.Label>
                            <Form.Control type="text" placeholder="Enter destination station" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="Enter date of the journey" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Classes</Form.Label>
                            <Form.Control as="select">
                                <option>All Classes</option>
                                <option>Sleeper(SL)</option>
                                <option>AC Chair Car(CC)</option>
                                <option>AC 3 Tier(3A)</option>
                                <option>AC 2 Tier(2A)</option>
                                <option>AC First Class(1A)</option>
                                <option>AC 3 Economy(3E)</option>
                                <option>First Class(FC)</option>
                                <option>Exec. Chair Car(EC)</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Flexible with date" />
                        </Form.Group>
                        <Button variant="secondary" type="submit" block>Find Trains</Button>
                    </Form>

                </Card.Body>
            </Card>
        )
    }
  
}