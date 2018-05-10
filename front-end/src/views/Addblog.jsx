import React from 'react'
import { render } from 'react-dom'
import {getData,postData} from "../http/index"
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw,convertFromRaw } from 'draft-js';
import draftToMarkdown from 'draftjs-to-markdown';
import draftToHtml from 'draftjs-to-html';
import { message,Select} from 'antd';
const Option = Select.Option;

class Addblog extends React.Component{
    constructor(props) {
        super(props)
		this.state ={
            mainData:[],
            editorState:{},
            category:[]
		}
    }
    getTitle(e){
        this.setState({blogTitle: e.target.value});
    }
    getName(e){
        this.setState({blogName: e.target.value});
    }
    setCategory = (value) => {
        this.setState({blogFlag:value});
    }
    onEditorStateChange(editorState){
        this.setState({
          editorState
        });
    };
    pushBlogData(){
        let params = {
            title:this.state.blogTitle,
            name:this.state.blogName,
            category:this.state.blogFlag,
            content:draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
        }
        postData('/weapp/add-blog',params).then(res =>{
            if(res.status == 200){
                message.success('添加成功！');
                this.props.history.push('/list');
            }
        })
    }
    getCategoryData = ()=>{
        getData('/weapp/search-category').then(res=>{
            this.setState({category:res.data})
        })
    }
    componentWillMount(){
        this.getCategoryData();
    }
    render(){
        return (
            <div className="blog">
                <div className="blog-title">添加博文</div>
                <div className="blog-row">
                    <label>请输入博客标题：</label>
                    <input type="text" onChange={this.getTitle.bind(this)}/>
                </div>
                <div className="blog-row">
                    <label>请输入博客作者：</label>
                    <input type="text" onChange={this.getName.bind(this)}/>
                </div>
                <div className='blog-row'>
                    <label>请选择博客类别：</label>
                    <Select defaultValue='请选择' style={{ width: 120 }} onChange={ this.setCategory }>
                    {
                        this.state.category.map(item =>{
                            return(
                                <Option key={item.id} value={item.id}>{item.name}</Option>
                            )
                        })
                    }
                    </Select>
                </div>
                <div className="blog-row">
                    <label className='blog-content-label'>请输入博客内容：</label>
                    <Editor
                        localization={{ locale: 'zh' }}
                        toolbarClassName="editorToolbar"
                        wrapperClassName="editorWrapper"
                        editorClassName="editorContent"
                        onEditorStateChange={this.onEditorStateChange.bind(this)}
                    />
                </div>
                <div className="blog-row">
                    <button onClick= { this.pushBlogData.bind(this) } > 提交 </button>
                </div>
            </div>
        )
    }
}

export default Addblog