import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Button } from 'semantic-ui-react'
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './testReducer'

function Sandbox() {

    const dispatch = useDispatch()

    const data = useSelector(state => state.data)
    return (
        <div>
            <h1>Testing 123</h1>
            <h1>data is : {data}</h1>
            <Button onClick={() =>dispatch({type:INCREMENT_COUNTER}) }content='increase'/>
            <Button onClick={() =>dispatch({type:DECREMENT_COUNTER}) }content='decrease'/>
        </div>
    )
}

export default Sandbox
