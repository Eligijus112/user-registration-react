// Importing the react class for componnet building
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// API calls 
import axios from 'axios';

// Loading the API constants 
const host_site = process.env.REACT_APP_HOST

// Defining the form class 
class RegistrationForm extends React.Component {

    state = {
        username: '',
        password: '',
        admin_password: ''
    }

    postUser = () => {
        const APIurl = 'https://' + host_site + '/register';
        axios({
            url: APIurl, 
            method: 'post', 
            data: this.state
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