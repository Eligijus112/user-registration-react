// Importing react 
import React, { Component } from 'react';

// Importing registration form component 
import RegistrationForm from './components/RegistrationForm';

// Importing test API call component 
import APIcall from './components/APIcall';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class App extends Component {

  render() {

    return (
      <Tabs>
        <TabList>
          <Tab>Register users</Tab>
          <Tab>API </Tab>
        </TabList>

        <TabPanel>
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
        </TabPanel>

        <TabPanel>
        <div className='main-page'>
          <header className='main-page-header'>
            <p> Make an API call </p>
          </header>

          <div className='sub-header'>
            <p>
              Test out the API by mocking some data and seeing the results
          </p>

          </div>
          <div className='form'>
            <APIcall/>
          </div>
        </div>
        </TabPanel>
      </Tabs>
    )
  }
}

export default App;
