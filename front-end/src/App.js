import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

import './styles/common.less';

class App extends Component{
    render() {
      return (
        <Layout>
            <Header style={{ position: 'fixed', width: '100%' }}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">
                    <Link to="/list">博客首页</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/addblog">博客管理</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    nav 3
                </Menu.Item>
            </Menu>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}> 
                    {this.props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center',borderTop: '1px solid #ccc' }}>
                博客管理系统
            </Footer>
        </Layout>
      )
    }
}
/* 
<div className='container'>
            <ul className='blog-nav'>
                <li>导航</li>
                <li><Link to="/addblog">添加博客</Link></li>
                <li><Link to="/list">博客列表</Link></li>
            </ul>
            {this.props.children}
        </div>
*/
export default App