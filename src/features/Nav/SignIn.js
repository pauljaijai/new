import React from 'react';

import { Dropdown, Image, Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

function SignIn({signOut}){


    return(
    <Menu.Item position='right' >
        <Image avatar spaced='right' src='https://randomuser.me/api/portraits/men/20.jpg'/>
        <Dropdown point='top left' text='obo'>
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to='Create Event' text='Create Event' icon='plus'/>
                <Dropdown.Item  text='My profile' icon='user'/>
                <Dropdown.Item  onClick={signOut} text='Sign Out' icon='power'/>

                
            </Dropdown.Menu>

        </Dropdown>
    </Menu.Item>
    )   
}

export default SignIn