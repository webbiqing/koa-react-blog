import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import './styles/common.less';

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

export default App