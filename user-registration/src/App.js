// Importing react 
import React, { Component } from 'react';

// Importing registration form component 
import RegistrationForm from './components/RegistrationForm';

class App extends Component {

  render() {

    return (
      <div className='main-page'>
        <header className='main-page-header'>
          <p> Welcome to the user registration page </p>
        </header>

        <div className='sub-header'>
          <p>
            The users registered through this page will be able to use the Heart Failure API.
          </p>

          <p>
            The main API project in GIT:
          <a href="https://github.com/Eligijus112/flask-application" target='_blank'> Heart failure API </a>
          </p>
        </div>
        <div className='form'>
          <RegistrationForm />
        </div>
      </div>
    )
  }
}

export default App;
