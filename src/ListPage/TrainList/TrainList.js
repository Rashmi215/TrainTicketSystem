import React, {Component} from 'react';
import {Card, Container, Row, Col, Form} from 'react-bootstrap';
import axios from 'axios';
import './TrainList.css';
import SingleTrain from './SingleTrain';

export default class TrainList extends Component{

    state = {
        list: [],
        checked_journey_class: true,
        checked_ac1: true,
        checked_ac2: true,
        checked_ac3: true,
        checked_sleeper: true
    }

    componentDidMount() {
        const {from} = this.props.location.state;
        const {to} = this.props.location.state;
        axios.get('http://localhost:4000/trains')
           .then((res) => {
                if(from.toLowerCase() === 'delhi' && to.toLowerCase() === 'mumbai') {
                    this.setState({list: res.data[0].DelMum})
                } else {
                    this.setState({list: res.data[1].MumDel})
                }
           })
    }

    resetButton = () =>  this.setState({checked_journey_class: true, checked_ac1: true, checked_ac2: true, checked_ac3: true, checked_sleeper: true});

    filterAll = () => {
        this.setState({checked_journey_class: !this.state.checked_journey_class}, () => {
            if(this.state.checked_journey_class) {
                this.setState({checked_ac1: true, checked_ac2: true, checked_ac3: true, checked_sleeper: true});
            } else {
                this.setState({checked_ac1: false, checked_ac2: false, checked_ac3: false, checked_sleeper: false});
            }
        });
        
    }

    filterAC1 = () => this.setState({checked_ac1: !this.state.checked_ac1});

    filterAC2 = () => this.setState({checked_ac2: !this.state.checked_ac2});

    filterAC3 = () => this.setState({checked_ac3: !this.state.checked_ac3});

    filterSleeper = () => this.setState({checked_sleeper: !this.state.checked_sleeper});

    render(){
        const {list, checked_journey_class, checked_ac1, checked_ac2, checked_ac3, checked_sleeper} = this.state;

        return(
            <Container fluid>
                <Row className="no-gutters">
                    <Col md={3} sm={4}>
                        <div className='side-style'>
                            <h6>Refine</h6>
                            <h6 className='reset-style' onClick={this.resetButton}>Reset</h6>
                            <div>
                                <Form.Check type="checkbox" label="Journey Class" checked={checked_journey_class} onChange={this.filterAll}/>
                                <br/>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="AC First Class (1A)" checked={checked_ac1} onChange={this.filterAC1}/>
                                    <Form.Check type="checkbox" label="AC 2 Tier (2A)" checked={checked_ac2} onChange={this.filterAC2}/>
                                    <Form.Check type="checkbox" label="AC 3 Tier (3A)" checked={checked_ac3} onChange={this.filterAC3}/>
                                    <Form.Check type="checkbox" label="Sleeper (SL)" checked={checked_sleeper} onChange={this.filterSleeper}/>
                                </Form.Group>
                            </div>
                        </div>
                    </Col>

                    <Col md={9} sm={4}>

                        <Card className='card-style'>
                            <Row>
                                <Col>Train name & no.</Col>
                                <Col>
                                    <Row>
                                        <Col>Departs</Col>
                                        <Col>Arrives</Col>
                                        <Col>Duration</Col>
                                    </Row>
                                </Col>
                                <Col>Class</Col>
                                <Col>Availability & fare</Col>
                            </Row>
                        </Card>

                        {!checked_journey_class &&
                            <Card><Card.Body style={{color: 'red', boxShadow: '5px 5px #888888'}}>No train(s) are available for the filter you have selected</Card.Body></Card>
                        }

                        {list.map(item => {
                            if(checked_ac1) {
                                if(item.class.includes("AC First Class (1A)")) {
                                    return <SingleTrain item={item}/>
                                }
                            }
                            if(checked_ac2) {
                                if(item.class.includes("AC 2 Tier (2A)")) {
                                    return <SingleTrain item={item}/>
                                } 
                            }
                            if(checked_ac3) {
                                if(item.class.includes("AC 3 Tier (3A)")) {
                                    return <SingleTrain item={item}/>
                                } 
                            }
                            if(checked_sleeper) {
                                if(item.class.includes("Sleeper (SL)")) {
                                    return <SingleTrain item={item}/>
                                } 
                            }
                        })}

                    </Col>
                </Row>
            </Container>
        )
    }
}