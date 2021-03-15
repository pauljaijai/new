import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import EventDetailChat from './EventDetailChat'
import EventDetailHeader from './EventDetailHeader'
import EventDetailInfo from './EventDetailInfo'
import EventDetailSidebar from './EventDetailSidebar'
import {useSelector} from 'react-redux'

function EventDetailPage({match}) {

    const event = useSelector(state => state.event.events.find(e => e.id === match.paprams.id));

    return (
        
        <Grid>
            <Grid.Column width={10}>
                <EventDetailHeader event={event}/>
                <EventDetailInfo event={event}/>
                <EventDetailChat/>
            </Grid.Column>

            <GridColumn width={6}>
                <EventDetailSidebar attend={event.attend}/>
            </GridColumn>
        </Grid>
        
    )
}

export default EventDetailPage
