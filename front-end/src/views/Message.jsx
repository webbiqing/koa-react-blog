import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom';
import {getData,postData} from "../http/index"
import '../styles/message'

class Message extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      blogList:[]
    }
  }
  componentWillMount(){
    getData('/weapp/search-blog').then(res =>{
      this.setState({blogList:res.data})
    })
  }
  render(){
    return (
      <div className='message'>
        <div className="message-title">
          小凤的博客
        </div>
        <div className="message-left">
          <p>留言</p>
          <div className="message-content">
            <input type="text" placeholder="昵称" />
          </div>
          <div className="message-content">
            <input type="text" placeholder="邮箱" />
          </div>
          <div className="message-inner">
            <input type="text" placeholder="来说两句吧..." />
          </div>
          <div className="message-button">
            <button>畅言一下</button>
          </div>
        </div>

        <div className="rightFixed">
          <div className="message-fixed">

          </div>
        </div>
      </div>
    )
  }
}

export default Message