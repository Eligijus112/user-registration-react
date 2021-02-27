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
          <Tab>Info</Tab>
          <Tab>API</Tab>
          <Tab>Register users</Tab>
        </TabList>

        <TabPanel>
          <div className='main-page'>
            <Card>
              <Card.Title> Y variable </Card.Title>
              <Card.Body> The dependant variable is <b>TenYearCHD</b> - whether or not a person will devel Coronary Heart Disease (CHD) in the next 10 years </Card.Body>
            </Card>

            <Card>
              <Card.Title> Features in models </Card.Title>
              <Card.Body>
                <div className='features-info'>

                  <div className='features-entry'>
                    <b>Male</b> - categorical variable; 1 - the person is a male, 0 - female
                  </div>

                  <div className='features-entry'>
                    <b>Age</b> - integer; current age of the person
                  </div>

                  <div className='features-entry'>
                    <b>CurrentSmoker</b> - categorical variable; 1 if the person is currently smoking; 0 if not
                  </div>

                  <div className='features-entry'>
                    <b>CigsPerDay</b> - average amount of daily cigarette consumption
                  </div>

                  <div className='features-entry'>
                    <b>SysBP</b> - float; Systolic blood pressure  
                  </div>

                  <div className='features-entry'>
                    <b>Heart rate</b> - float; Heart beats per minute 
                  </div>

                  <div className='features-entry'>
                    <b>BMI</b> - float; Body Mass Index  
                  </div>

                  <div className='features-entry'>
                    <b>Glucose</b> - float; Glucose level in the blood  
                  </div>

                  <div className='features-entry'>
                    <b>Total Cholestoral</b> - float; Total Cholesterol level
                  </div>

                  <div className='features-entry'>
                    <b>Diabetes</b> - categorical variable; 1 if the person is currently having diabetes; 0 if not
                  </div>

                  <div className='features-entry'>
                    <b>PrevalentStroke</b> - categorical variable; 1 if the person has had a hear stroke before; 0 if not
                  </div>
                </div>
              </Card.Body>
            </Card>

            <b>Typical numeric feature ranges</b>
            <div className='feature-info'>
              <Card> <Card.Title> Heart rate </Card.Title> <Card.Body> Typical ranges 60 to 100 </Card.Body> </Card>

              <Card> <Card.Title> Glucose </Card.Title> <Card.Body> Typical ranges 90 - 130 mg/dL </Card.Body> </Card>

              <Card> <Card.Title> BMI </Card.Title> <Card.Body> Ranges between 17 to 36 </Card.Body> </Card>

              <Card> <Card.Title> Cholesterol </Card.Title> <Card.Body> Ranges from 150 to 240 mg/dL  </Card.Body> </Card>

              <Card> <Card.Title> Cigarettes per day </Card.Title> <Card.Body> Typical range from 0 to 30 </Card.Body> </Card>

              <Card> <Card.Title> Systolic blood pressure </Card.Title> <Card.Body> Typical range from 110 to 150 mm Hg </Card.Body> </Card>


            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='main-page'>
            <header className='main-page-header'>
              <p> Make an API call </p>
            </header>

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
