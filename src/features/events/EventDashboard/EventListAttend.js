import React from 'react'
import { List , Image} from 'semantic-ui-react'


function EventListAttend({attend}) {
    return (
        <List.Item>
                <Image size='mini' circular src={attend.photoURL}/>
        </List.Item>
    )
}

export default EventListAttend
