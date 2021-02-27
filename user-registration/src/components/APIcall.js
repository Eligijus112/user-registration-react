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
const http = process.env.REACT_APP_HTTP_METHOD
var port 

if (process.env.REACT_APP_BACKEND_PORT=="80"){
    port = "/"
} else {
    port = ":" + process.env.REACT_APP_BACKEND_PORT + "/"
}

// Defining the form class 
class APIcall extends React.Component {

    state = {
        version: 'v1',
        username: username,
        password: password,
        heartRate: 80, 
        glucose: 100,
        BMI: 20,
        totChol: 180, 
        cigsPerDay: 10, 
        age: 30,
        sysBP: 120,
        currentSmoker: 0,
        male: 0, 
        diabetes: 0,
        prevalentStroke: 0,
        p: null
    }

    getProb = () => {
        const APIurl = http + '://' + host_site + port + this.state.version + '/predict';
        axios({
            url: APIurl, 
            method: 'get', 
            params: this.state
        }).then(
            res => this.setState({p: Number(res.data.probability.toFixed(3))})
        )
    }

    render() {
        return (
          <div>
            <div >
            {this.state.p ? 
                <div className='p-results'> 
                    Probablity of CHD in 10 years: 
                    
                    <br></br>
                    
                    {this.state.p} 
                </div>
                    : 
                    <div> </div>
            }
            </div>

            <Form>
                
            <Form.Group controlId="api_version">
                <Form.Label>API version</Form.Label>
                <br />
                <Form.Control
                        as='select'
                        placeholder="API version"
                        value={this.state.version}
                        onChange={e => this.setState({ version: e.target.value })}
                    >
                    <option value='v1'> v1 </option>
                    <option value='v2'> v2 </option>
                    <option value='v3'> v3 </option>
                </Form.Control>
            </Form.Group>

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

                <Form.Group>
                    <Form.Label> Systolic blood pressure </Form.Label>
                    <br />
                    <Form.Control
                        type='number'
                        placeholder="Systolic blood pressure"
                        value={this.state.sysBP}
                        onChange={e => this.setState({ sysBP: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="smoker">
                    <Form.Label>Current smoker?</Form.Label>
                    <br />
                    <Form.Control
                            as='select'
                            value={this.state.currentSmoker}
                            onChange={e => this.setState({ currentSmoker: e.target.value })}
                        >
                        <option value='0'> No </option>
                        <option value='1'> Yes </option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="male">
                    <Form.Label>Is the person male?</Form.Label>
                    <br />
                    <Form.Control
                            as='select'
                            value={this.state.male}
                            onChange={e => this.setState({ male: e.target.value })}
                        >
                        <option value='0'> No </option>
                        <option value='1'> Yes </option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="diabetes">
                    <Form.Label>Is the person suffering from diabetes?</Form.Label>
                    <br />
                    <Form.Control
                            as='select'
                            value={this.state.diabetes}
                            onChange={e => this.setState({ diabetes: e.target.value })}
                        >
                        <option value='0'> No </option>
                        <option value='1'> Yes </option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="diabetes">
                    <Form.Label>Has the person had a heart stroke in the past?</Form.Label>
                    <br />
                    <Form.Control
                            as='select'
                            value={this.state.prevalentStroke}
                            onChange={e => this.setState({ prevalentStroke: e.target.value })}
                        >
                        <option value='0'> No </option>
                        <option value='1'> Yes </option>
                    </Form.Control>
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