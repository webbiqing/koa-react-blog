import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Layout, Menu, Breadcrumb } from 'antd';
import {getData,postData} from "./http/index"
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import './styles/common';
import './styles/home'

const history = createBrowserHistory();

class App extends Component{
    constructor(props) {
        super(props);
        this.state= {
            category:[]
        }
    }
    getCategoryData = ()=>{
        getData('/weapp/search-category').then(res=>{
            this.setState({category:res.data})
        })
    }
    searchBlog(category){
        
    }
    componentWillMount(){
        this.getCategoryData();
    }
    render() { 
        let header =  <Header className='layout-header' style={{ width: '100%'}} >
                        <div className="logo" />
                        <div className='loginMainBox'>
                            <Link to='/login'>登录</Link>/
                            <Link to='/login'>注册</Link>
                        </div>
                        <Menu
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '49px',width: 1000,margin:'0 auto' }}
                        >
                            <Menu.Item key="101">
                                <Link to="/">博客首页</Link>
                            </Menu.Item>
                            <SubMenu key="102" title={<span>博客管理</span>}>
                                <Menu.Item key="setting:11"><Link to="/list">我的博客</Link></Menu.Item>
                                <Menu.Item key="setting:12"><Link to="/addblog">新增博客</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="12" title={<span>博客类别</span>}>
                            {
                                this.state.category.map(item =>{
                                    return(
                                        <Menu.Item key={item.id} onClick = {()=>this.searchBlog(item.id)}>{item.name}</Menu.Item>
                                    )
                                })
                            }
                            </SubMenu>
                            <Menu.Item key="103">
                              <Link to="/Message">留言板</Link>
                            </Menu.Item>
                            <Menu.Item key="104">
                              <Link to="/Information">我的个人信息</Link>
                            </Menu.Item>

                        </Menu>
                    </Header>
      return (
        <Layout>
            {
                 this.props.location.pathname != '/login' ? header : ''
            }
            <Content style={{ width: 1000, margin:'50px auto 0 auto' }}>
                <div style={{ padding: 10, minHeight: 380 }}> 
                    {this.props.children}
                </div>
                
            </Content>
        </Layout>
      )
    }
}
export default App