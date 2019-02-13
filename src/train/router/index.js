import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    browserHistory
} from 'react-router-dom'
import TrainHome from '../pages/app.js'
import Sec from '../pages/sec.js';

export default ()=>(<Router    basename="/train">
        <Switch>
           <Route path="/"  exact  component={TrainHome}></Route>
           <Route path="/sec"  exact  component={Sec}></Route>
        </Switch>
    </Router>
)
