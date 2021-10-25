import React from 'react';
import {render} from 'react-dom';
import { Router, Switch, Route } from 'react-router';
import App from './components/App';
import Blocks from './components/Blocks';
import ConductTransaction from './components/ConductTransaction';
import history from './history';
import './index.css'

render(
    <Router history= {history}>
        <Switch>
            {/* same as typing exact={true} */}
            <Route exact path='/' component={App}/>
            <Route path='/blocks' component={Blocks}/>
            <Route path='/conduct-transaction' component={ConductTransaction}/>

        </Switch>
    </Router>
    , document.getElementById('root'))
