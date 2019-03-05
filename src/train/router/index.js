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
import ArrayRepeat from '../pages/removingArrayRepeat'

export default ()=>(<Router    basename="/train">
        <Switch>
           <Route path="/"  exact  component={TrainHome}></Route>
           <Route path="/sec"  component={Sec}></Route>
            <Route path='/arrayRepeat' component={ArrayRepeat}></Route>
        </Switch>
    </Router>
)
