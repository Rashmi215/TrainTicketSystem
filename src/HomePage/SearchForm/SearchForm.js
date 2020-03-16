import React,{Component} from 'react';
import {Card, Button, Form} from 'react-bootstrap';
import './SearchForm.css';

export default class SearchForm extends Component{
    state = {
        from: '',
        to: ''
    }

    handleChange = e => {
       this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.from === '' || this.state.to === '') {
            alert('Please fill the source and destination stations')
        } else {
            this.props.history.push('/list', {'from': this.state.from, 'to': this.state.to})
        }
        
    }

    render(){
        return(
            <Card className='search-form' bg="info" text="light">
                <Card.Body>

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>From</Form.Label>
                            <Form.Control type="text" name='from' placeholder="Enter source station" onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>To</Form.Label>
                            <Form.Control type="text" name='to' placeholder="Enter destination station" onChange={this.handleChange}/>
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