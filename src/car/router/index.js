import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    browserHistory,
    hashHistory
} from 'react-router-dom'
import TrainHome from '../pages/app.js'

export default ()=>(<Router basename="/car">
        <Switch >
            <Route path="/index"  exact  component={TrainHome}></Route>
        </Switch>
    </Router>
)