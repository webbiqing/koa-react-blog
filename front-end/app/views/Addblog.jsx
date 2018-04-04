import React from 'react'
import { render } from 'react-dom'
import {getData,postData} from "../http/index"

class Addblog extends React.Component{
    constructor(props) {
        super(props)
		this.state ={
            mainData:[],
		}
    }
    getTitle(e){
        this.setState({blogTitle: e.target.value});
    }
    getName(e){
        this.setState({blogName: e.target.value});
    }
    getContent(e){
        this.setState({blogContent: e.target.value});
    }
    pushBlogData(){
        let params = {
            title:this.state.blogTitle,
            name:this.state.blogName,
            content:this.state.blogContent
        }
        postData('/weapp/add-blog',params).then(res =>{
            if(res.status == 200){
                alert('添加成功！')
            }
        })
    }
    render(){
        return (
            <div className="blog">
                <div className="blog-title">博客管理系统录入</div>
                <div className="blog-row">
                    <label>请输入博客标题：</label>
                    <input type="text" onChange={this.getTitle.bind(this)}/>
                </div>
                <div className="blog-row">
                    <label>请输入博客作者：</label>
                    <input type="text" onChange={this.getName.bind(this)}/>
                </div>
                <div className="blog-row">
                    <label>请输入博客内容：</label>
                    <textarea  name="blog-content" id="" onChange={this.getContent.bind(this)} cols="30" rows="10"></textarea>
                </div>
                <div className="blog-row">
                    <button onClick= { this.pushBlogData.bind(this) } > 提交 </button>
                </div>
            </div>
        )
    }
}
/* 
<ul>
                    {  
                        this.state.mainData.map(function(item){  
                            return <li key={item.id}>{item.name}</li>  
                        })  
                    }  
                </ul>
*/
export default Addblog