import React from 'react'
import {Item , Segment} from 'semantic-ui-react'

function EventDetailSidebar( attend) {
    return (
        <div>
<Segment
    textAlign="center"
    style={{border: 'none'}}
    attached="top"
    secondary
    inverted
    color="teal"
>
    {attend.length}{attend.length>1 ? ' People' : 'Person'}Going
</Segment>
<Segment attached>
    <Item.Group relaxed divided>

        {attend.map( attend => (
                 <Item  key={attend.id} style={{position: 'relative'}}>
                 <Item.Image size="tiny" src={  attend.photoURL || '/assets/user.png'}/>
                 <Item.Content verticalAlign="middle">
                     <Item.Header as="h3">
                         <span>{attend.displayName}</span>
                     </Item.Header>
                 </Item.Content>
             </Item>
        ))}
    
    </Item.Group>
</Segment>
</div>
    )
}

export default EventDetailSidebar
