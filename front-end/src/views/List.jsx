import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom';
import {getData,postData} from "../http/index"

class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            blogList:[{id:11,title:'这是一个标题',name:'测试'}]
        } 
    }
    componentWillMount(){
        getData('/weapp/search-blog').then(res =>{
            this.setState({blogList:res.data})
        })
    }
    render(){
        return (
            <div className='blog-list-main'>
                <div className='blog-title blogList-title'>我的博客</div>
                <ul className = 'blogList'>
                {
                    this.state.blogList.map(item =>{
                        return(
                            <li key={item.id}>
                                <div> {item.title}</div>
                                <div className='blogList-name'>发布人 ：{item.name}</div>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
            
        )
    }
}

export default List