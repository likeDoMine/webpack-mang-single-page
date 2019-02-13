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
import { TransitionGroup, CSSTransition } from "react-transition-group";

import TrainHome from '../pages/app.js'
import Sec from '../pages/sec'
export default ()=>(<Router basename="/car">
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch>
                        <Route path="/"  exact  component={TrainHome}></Route>
                        <Route path="/sec"    component={Sec}></Route>
                </Switch>   
            </CSSTransition>
        </TransitionGroup>
    </Router>
)
