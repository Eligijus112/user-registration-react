// Importing the react class for componnet building
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// API calls 
import axios from 'axios';

// Loading the API constants 
const host_site = process.env.REACT_APP_HOST
const username = process.env.REACT_APP_USERNAME
const password = process.env.REACT_APP_PASSWORD

// Defining the form class 
class APIcall extends React.Component {

    state = {
        username: username,
        password: password,
        heartRate: null, 
        glucose: null,
        BMI: null,
        totChol: null, 
        cigsPerDay: null, 
        age: null,
        p: null
    }

    getProb = () => {
        const APIurl = 'https://' + host_site + '/v2/predict';
        axios({
            url: APIurl, 
            method: 'get', 
            params: this.state
        }).then(
            //res => console.log(res)
            res => this.setState({p: Number(res.data.probability.toFixed(3))})
        )
    }

    render() {
        return (
          <div>
            <div >
            {this.state.p ? 
                <div className='p-results'> 
                    Probablity of heart failure in 10 years: 
                    
                    <br></br>
                    
                    {this.state.p} 
                </div>
                    : 
                    <div> </div>
            }
            </div>

            <Form>
                
                <Form.Group controlID='heartRate'>
                    <Form.Label> Heart rate </Form.Label>
                    <br />
                    <Form.Control
                        type='number'
                        placeholder="Heart rate"
                        value={this.state.heartRate}
                        onChange={e => this.setState({ heartRate: e.target.value })}
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label> Glucose level </Form.Label>
                    <br />
                    <Form.Control
                        type='number'
                        placeholder="Glucose"
                        value={this.state.glucose}
                        onChange={e => this.setState({ glucose: e.target.value })}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label> Body Mass Index (BMI) </Form.Label>
                    <br />
                    <Form.Control
                        type='number'
                        placeholder="BMI"
                        value={this.state.BMI}
                        onChange={e => this.setState({ BMI: e.target.value })}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label> Total cholesterol </Form.Label>
                    <br />
                    <Form.Control
                        type='number'
                        placeholder="Cholesterol"
                        value={this.state.totChol}
                        onChange={e => this.setState({ totChol: e.target.value })}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label> Cigarettes per day </Form.Label>
                    <br />
                    <Form.Control
                        type='number'
                        placeholder="Cigs per day"
                        value={this.state.cigsPerDay}
                        onChange={e => this.setState({ cigsPerDay: e.target.value })}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label> Age </Form.Label>
                    <br />
                    <Form.Control
                        type='number'
                        placeholder="Age"
                        value={this.state.age}
                        onChange={e => this.setState({ age: e.target.value })}
                    />
                </Form.Group>

                <div className='submit-user'>
                    <Button onClick={this.getProb}>
                        Get probability
                    </Button>
                </div>
            </Form>
        </div>     
        )
    }
}

export default APIcall;