import React from 'react'
import { Link } from 'react-router-dom'
import { Item, Segment ,Icon, List, Button} from 'semantic-ui-react'
import EventListAttend from './EventListAttend'
import {useDispatch} from 'react-redux'
import {deleteEvent} from '../eventActions.js'



function EventListItem({event}) {

   const dispatch = useDispatch();
   

    return (
        <Segment.Group>
                <Segment>
                    <Item.Group>

                        <Item>
                        <Item.Image size='tiny' src={event.hostPhotoURL}/>
                        <Item.Content>
                            <Item.Header content={event.title}/> 
                            <Item.Description></Item.Description>
                        </Item.Content>
                        <Item.Description>
                            Host by {event.hostedBy}
                        </Item.Description>
                        </Item>

                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                        <Icon name='clock'/> {event.date}
                        <Icon name='marker'/> {event.venue}
                    </span>
                </Segment>

                <Segment secondary>
                    <List horizontal>
                    {event.attend.map(attend => (
                        <EventListAttend key={attend.id} attend={attend} />
                    ))}
                        

                    </List>
                </Segment>

                <Segment clearing>
                    <div>{event.description}</div>


                    <Button 
                    onClick={() => dispatch( deleteEvent(event.id))}
                    color='red' 
                    floated='right' 
                    content='Delete'
                    />


                    <Button 
                    as={Link} to={`/events/${event.id}`}
                    color='teal' 
                    floated='right' 
                    content='View'
                    />
                    



                </Segment>
            </Segment.Group>
    )
}

export default EventListItem

