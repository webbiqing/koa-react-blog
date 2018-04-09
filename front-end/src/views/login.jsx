import React from 'react'
import { render } from 'react-dom'
import {getData,postData} from "../http/index"
import { message } from 'antd';
import '../styles/login'

class Login extends React.Component{
    constructor(props) {
        super(props);
    }
    handleEnterKey = (e) => {
        if(e.keyCode === 13){
            this.login();
        }
    }
    login(){
        let params = {
            username:this.state.username,
            pwd:this.state.pwd
        }
        getData('/weapp/login',params).then(
            res =>{
                if(res.data.data === 606){
                    this.props.history.push('/home')
                }else if(res.data.data === 909){
                    message.error('用户名或者密码错误');
                }
            }
        )
    }
    render(){
        return(
            <div className='login'>
                <div className="loginBox">
                    <div className="login-header">登录您的账号，发现知识的美</div>
                    <div className="login-container">
                        <div className="login-acconut">
                            <div className="login-input">
                                <input type="text" placeholder="手机号或邮箱"
                                    onChange={(e)=>{this.setState({username:e.target.value})}}
                                    onKeyDown={this.handleEnterKey}
                                 />
                            </div>
                        </div>
                        <div className="login-pwd">
                            <div className="login-input">
                                <input type="password" placeholder="请输入密码" 
                                onChange={(e)=>{this.setState({pwd:e.target.value})}}
                                onKeyDown={this.handleEnterKey}
                            />
                            </div>
                        </div>
                        <div className="login-button"><button onClick={ this.login.bind(this)}>立即登录</button></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login