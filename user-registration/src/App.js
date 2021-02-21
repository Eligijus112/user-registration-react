// Importing react 
import React, { Component } from 'react';

// Importing registration form component 
import RegistrationForm from './components/RegistrationForm';

// Importing test API call component 
import APIcall from './components/APIcall';

// Info component 
import Card from 'react-bootstrap/Card';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class App extends Component {

  render() {

    return (
      <Tabs>
        <TabList>
          <Tab>API</Tab>
          <Tab>Register users </Tab>
        </TabList>

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

            <div className='feature-info'>
            <Card> <Card.Title> Heart rate </Card.Title> <Card.Body> Typical ranges 60 to 100 </Card.Body> </Card>

            <Card> <Card.Title> Glucose </Card.Title> <Card.Body> Typical ranges 90 - 130 mg/dL </Card.Body> </Card>

            <Card> <Card.Title> BMI </Card.Title> <Card.Body> Ranges between 17 to 36 </Card.Body> </Card>

            <Card> <Card.Title> Cholesterol </Card.Title> <Card.Body> Ranges from 150 to 240 mg/dL  </Card.Body> </Card>

            <Card> <Card.Title> Cigarettes per day </Card.Title> <Card.Body> Typical range from 0 to 30 </Card.Body> </Card>

            </div>  
            <div className='form'>
              <APIcall />
            </div>
          </div>
        </TabPanel>

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


      </Tabs>
    )
  }
}

export default App;
