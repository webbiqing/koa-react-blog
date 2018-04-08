import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from '../App';
import Addblog from '../views/Addblog'
import List from '../views/List'
import Details from '../views/Details'


const history = createBrowserHistory();

const router = (
    <Router history={history}>
        <App>
            <Route path="/addblog" component={Addblog} />
            <Route path="/list" component={List} />
            <Route path="/details/:blogId" component={Details} />
        </App>
    </Router>
);

export default router