// Importing the react class for componnet building
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// API calls 
import axios from 'axios';

// Information encryption
import CryptoJS from "react-native-crypto-js";

// Loading the API constants 
const host_site = process.env.REACT_APP_HOST
const port = process.env.REACT_APP_BACKEND_PORT
const secret_key = process.env.REACT_APP_ENCRIPTION_KEY

// Defining the form class 
class RegistrationForm extends React.Component {

    state = {
        username: '',
        password: '',
        admin_password: ''
    }

    postUser = () => {
        const APIurl = 'http://' + host_site + ':' + port + '/register';
        const secret = secret_key;
        const payload = {
            "username": CryptoJS.AES.encrypt(this.state.username, secret).toString(),
            "password": CryptoJS.AES.encrypt(this.state.password, secret).toString(), 
            "admin_password": CryptoJS.AES.encrypt(this.state.admin_password, secret).toString() 
        }; 
        console.log(payload)
        axios({
            url: APIurl, 
            method: 'post', 
            data: payload 
        })
    }

    render() {
        return (
            <Form>
                <Form.Group controlID='formUsername'>
                    <Form.Label> Username </Form.Label>
                    <br />
                    <Form.Control
                        type='Text'
                        placeholder="Enter username"
                        value={this.state.username}
                        onChange={e => this.setState({ username: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlID='formPassword'>
                    <Form.Label> Password for the user </Form.Label>
                    <br />
                    <Form.Control
                        type='password'
                        placeholder="Password"
                        value={this.state.password}
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlID='formPasswordAdmin'>
                    <Form.Label> Admin password </Form.Label>
                    <br />
                    <Form.Control
                        type='password'
                        placeholder="Password for admin"
                        value={this.state.admin_password}
                        onChange={e => this.setState({ admin_password: e.target.value })}
                    />
                </Form.Group>

                <div className='submit-user'>
                    <Button onClick={this.postUser}>
                        Submit user
                    </Button>
                </div>
            </Form>
        )
    }
}

export default RegistrationForm;