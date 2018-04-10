import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom';
import {getData,postData} from "../http/index"

class Home extends React.Component{
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
           <div className='home'>
               <div className="home-left">
               {
                    this.state.blogList.map(item =>{
                        return(
                            <div className='home-list' key={item.id}>
                                <div className='list-item'>
                                    <div className='user-info'>{item.name}</div>
                                    <h2>{item.title}</h2>
                                    <div className='item-footer'>
                                        <div className='item-footer-card'></div>
                                        <div className="item-footer-date"></div>
                                        <div className="item-footer-reply"></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
               </div>
               <div className="home-right"></div>
           </div>
        )
    }
}

export default Home