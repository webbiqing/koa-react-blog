import React, { Component } from 'react';
import { render } from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

import './styles/common.less';

import Addblog from './views/Addblog'
import List from './views/List'
import Details from './views/Details'

class App extends Component{
    render() {
      return (
        <div className='container'>
            <ul className='blog-nav'>
                <li>导航</li>
                <li><Link to="/addblog">添加博客</Link></li>
                <li><Link to="/list">博客列表</Link></li>
            </ul>
            {this.props.children}
        </div>
      )
    }
}
  
const router = (
    <HashRouter>
        <App>
            <Route path="/addblog" component={Addblog} />
            <Route path="/list" component={List} />
            <Route path="/details/:blogId" component={Details} />
        </App>
    </HashRouter>
);

render(router, document.getElementById("app"))