import React from 'react'
import {Switch, Route} from 'react-router-dom'

import ToDo from './pages/ToDo'

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={ToDo} />
        </Switch>
    )
}

export default Routes