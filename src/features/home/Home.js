import React from 'react'
import { Container, Header, Segment ,Image, Button, Icon } from 'semantic-ui-react';
import '../../layout/styles.css'

function Home({history}) {
    return (
        

        <Segment inverted textAlign='center' className='masthead'>
            <Container>
                <Header as='h1' inverted>
                    <Image size='massive' src='https://randomuser.me/api/portraits/men/20.jpg' style={{marginBottom: 12}}/>
                        HAHA
                </Header>

                <Button onClick={() => history.push('./events')} size='huge' interted>
                    Get started
                </Button>

                <Icon name='right arrow' inverted/>
            </Container>
        </Segment>

    )
}

export default Home
