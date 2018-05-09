import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom';
import {getData,postData,deleteData} from "../http/index"
import { Modal, Button,message } from 'antd';

class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            blogList:[],
            btnloading:false            
        } 
    }
    getData(){
        getData('/weapp/search-blog').then(res =>{
            this.setState({blogList:res.data})
        })
    }
    componentWillMount(){
        this.getData();
    }
    
    showModal(id){
        let _this = this;
        Modal.confirm({
            title: '删除博客',
            content: '您确认要删除这条博客？',
            onOk() {
                _this.setState({btnloading:true});
                setTimeout(()=>{
                    deleteData('/weapp/del-blog',{id:id}).then(res =>{
                        _this.setState({btnloading:false}); 
                        _this.getData();  
                        if(res.status == 200){
                            message.success('删除成功！');
                        }                                     
                        return true;
                    }).catch(res=>{
                        return true;
                    })
                },1000)
            },
            okText: '确认',
            cancelText: '取消',
          });
    }
    test(a){
        console.log(a);
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
                                <div>{item.title}</div>
                                <div className='blogList-name'>
                                    <div className='blogList-btn'>
                                        <Button  type="primary"><Link to={`/edit/${item.id}`}>编辑</Link></Button>
                                        <Button  type="primary" loading={this.state.btnloading} onClick={this.showModal.bind(this,item.id)}>删除</Button>
                                    </div>
                                   <div>
                                       <span> 发布时间 ：{item.name}</span>
                                   </div>
                                </div>
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