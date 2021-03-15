
import {Button, Container, Menu} from 'semantic-ui-react';

import '../../layout/styles.css'


import React, {useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import SignOut from './SignOut';
import SignIn from './SignIn';

function Nav({setFormOpen}) {

    const history =useHistory();

    const [authenticated, setAuthenticated] = useState(false);


    function handleSignOut(){
        setAuthenticated(false);
        history.push('/')
    }

    return (
        <Menu invterted fixed='top'>
                <Container>
                    <Menu.Item as={NavLink} to='/' header>
                        HAHA
                    </Menu.Item>

                    <Menu.Item as={NavLink} to='/events' name='Events'/>
                    <Menu.Item as={NavLink} to='/sandbox' name='Sandbox'/>

                    {authenticated &&
                    <Menu.Item as={NavLink} to='createEvent'>
                        <Button  positive inverted content='Create Event'/>
                    </Menu.Item>}

                    {authenticated ? 
                    <SignIn signOut={handleSignOut}/> 
                    : <SignOut setAuthenticated={setAuthenticated}/>}
                   

                </Container>
            </Menu>
    )
}

export default Nav
