import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
} from 'react-router-dom'
import TrainHome from '../pages/app.js'

export default ()=>(<Router   basename="/train">
        <Switch>
            <Route path="/index"  exact component={TrainHome}></Route>
        </Switch>
    </Router>
)