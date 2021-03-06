import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom';
import {getData,postData} from "../http/index"
import '../styles/information'

class Information extends React.Component{
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
      <div className='info'>
        <div className="info-title">
          <p>趁我们都还年轻,多欣赏下沿途的风景，不要错过了流年里温暖的人和物....</p>
        </div>
        <div className="info-left">
          <div className="info1">
            关于我
            <a>
              <Link to="/login">退出登录</Link>
            </a>
          </div>
          <div className="info2">
            <div className="info2-Pho">

            </div>
            <div className="info2-Inner">
              <p>关于博主</p>
              <div>
                个人资料: 女,九零后,程序猿一枚
              </div>
              <div>
                爱好: 无
              </div>
              <div>
                个人简介: 无
              </div>
              <div>
                联系方式: 邮箱:webzfeng@163.com/QQ:1192714680
              </div>
            </div>
          </div>
          <div className="info2">
            <div className="info2-Pho">

            </div>
            <div className="info2-Inner">
              <p>关于博客</p>
              <div>
                创建时间: 2018-01-01
              </div>
              <div>
                访问量: 99+
              </div>
            </div>
          </div>
        </div>
        <div className="rightFixed">
          <div className="info-fixed">

          </div>
        </div>
      </div>
    )
  }
}

export default Information