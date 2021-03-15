import React, {useState} from 'react'
import { Form, Segment , Header, Button} from 'semantic-ui-react'
import cuid from 'cuid';
import { Link } from 'react-router-dom';
import {useSelector ,useDispatch} from 'react-redux'
import { createEvent , updateEvent} from '../eventActions'

function EventForm({ match , history}) {

    const dispatch = useDispatch()

    const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.paprams.id));

    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        venue: '',
        date: '',
    };
   

    const [values,setValues] = useState(initialValues);

    function handleFormSubmit(){

        selectedEvent ?  dispatch(updateEvent({...selectedEvent,...values}))
        : dispatch(createEvent({...values, id:cuid(), hostedBy:'bob', attend:[]}));
        history.push('./events')
    }

    const handleInputChange = (e) =>{
        
        const{name,value} = e.target;
        setValues({...values , [name] : value})
    }

    
    return (
        <Segment clearing>
                <Header content={selectedEvent ? 'Edit event' : 'Create new event'}/>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Field>
                        <input 
                        type ='text' 
                        placeholder ='Event Title' 
                        name ='title'
                        value = {values.title} 
                        onChange = {e=> handleInputChange(e)}/>
                    </Form.Field>

                    <Form.Field>
                        <input 
                        type='text' 
                        placeholder='Catgory'
                        name ='Catgory'
                        value = {values.Catgory} 
                        onChange = {e=> handleInputChange(e)} />
                    </Form.Field>

                    <Form.Field>
                        <input 
                        type='text' 
                        placeholder='Description'
                        name ='description'
                        value = {values.description} 
                        onChange = {e=> handleInputChange(e)}/>
                    </Form.Field>

            
                    <Form.Field>
                        <input 
                        type='text' 
                        placeholder='Venue'
                        name ='venue'
                        value = {values.venue} 
                        onChange = {e=> handleInputChange(e)}/>
                    </Form.Field>

                    <Form.Field>
                        <input 
                        type='date'
                        placeholder='Date'
                        name ='date'
                        value = {values.date} 
                        onChange = {e=> handleInputChange(e)}/>
                    </Form.Field>

                    <Button type='submit' floated='right' positive content='Submit'/>
                    <Button  as={Link} to='/events'  type='submit' floated='right' negative content='Cancel'/>


                </Form>
            </Segment>
    )
}

export default EventForm
