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
                                <Link to={`/details/${item.id}`} >
                                    <div className='list-item'>
                                        <div className='user-info'>{item.name}</div>
                                        <h2>{item.title}</h2>
                                        <div className='item-footer'>
                                            <div className="item-footer-date">更新时间：{item.date}</div>
                                            <div className="item-footer-category">博客类别：{item.category_name}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }

               </div>
               <div className="rightFixed">
                 <div className="home-right">
                   <div className="icon">
                     <div className="right-icon">
                       <i className="icon1"></i>
                       <a href="">知乎</a>
                     </div>
                     <div className="right-icon">
                       <i className="icon2"></i>
                       <a href="">Github</a>
                     </div>
                     <div className="right-icon">
                       <i className="icon3">E</i>
                       <a href="">E-mail</a>
                     </div>
                   </div>
                   <div className="icon">
                     <div className="right-icon">
                       <i className="icon4"></i>
                       <a href="">微博</a>
                     </div>
                     <div className="right-icon">
                       <i className="icon5"></i>
                       <a href="">Medium</a>
                     </div>
                   </div>
                 </div>
                 <div className="home-fixed">

                 </div>
               </div>

           </div>
        )
    }
}

export default Home