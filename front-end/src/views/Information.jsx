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
          小凤的博客
          <p>趁我们都还年轻,多欣赏下沿途的风景，不要错过了流年里温暖的人和物....</p>
        </div>
        <div className="info-left">
          <div className="info1">
            关于我
          </div>
          <div className="info2">
            <div className="info2-Pho">

            </div>
            <div className="info2-Inner">
              <p>关于博主</p>
              <div>
                个人资料:
              </div>
              <div>
                爱好:
              </div>
              <div>
                个人简介:
              </div>
              <div>
                联系方式:
              </div>
            </div>
          </div>
          <div className="info2">
            <div className="info2-Pho">

            </div>
            <div className="info2-Inner">
              <p>关于博客</p>
              <div>
                创建时间:
              </div>
              <div>
                访问量:
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