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

import App from '../pages/app.js'
import Sec from '../pages/sec'
import AntiShake from '../pages/Anti-shake'
import GlobalThis from '../pages/arrayRepeat'
import Person from '../pages/prototype'
import Sort from '../pages/sort';
import Upload from '../pages/upload'

export default ()=>(<Router basename="/car">
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch>
                   <Route path="/"  exact  component={App}></Route>
                   <Route path="/sec"    component={Sec}></Route>
                   <Route path='/antiShake' component={AntiShake}></Route>
                   <Route path='/globalThis' component={GlobalThis}></Route>
                   <Route path='/proto' component={Person}></Route>
                   <Route path='/sort' component={Sort}></Route>
                   <Route path='/upload' component={Upload}></Route>
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    </Router>
)
