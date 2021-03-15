import React from 'react'
import { Route, useLocation } from 'react-router';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../features/events/EventDashboard/EventDashboard.js'
import EventDetailPage from '../features/events/EventDetail/EventDetailPage.js';
import EventForm from '../features/events/EventForm/EventForm.js';
import Home from '../features/home/Home.js';
import Nav from '../features/Nav/Nav.js'
import Sandbox from '../features/sandbox/Sandbox.js';


function App() {

  const {key} = useLocation();

  

  return (
    <div>
      <Route exact path='/' component={Home}/>
      <Route 
      path={'/(.+)'} 
      render={() => (

      <div>
      <Nav />
      <Container className='main'>
        
        <Route exact path='/events' component={EventDashboard}/>
        <Route exact path='/sandbox' component={Sandbox}/>
        <Route path='/events/:id' component={EventDetailPage}/>
        <Route path={['/createEvent' ,'/manage/:id']} component={EventForm} key={key}/>
      
        </Container>

      </div>
     )}
        />
    </div>
      
  );
}

export default App;
