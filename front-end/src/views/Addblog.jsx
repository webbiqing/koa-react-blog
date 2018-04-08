import React from 'react'
import { render } from 'react-dom'
import {getData,postData} from "../http/index"
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class Addblog extends React.Component{
    constructor(props) {
        super(props)
		this.state ={
            mainData:[],
            editorState:{},
		}
    }
    getTitle(e){
        this.setState({blogTitle: e.target.value});
    }
    getName(e){
        this.setState({blogName: e.target.value});
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
            content:draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
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
                <div className="blog-title">博文录入</div>
                <div className="blog-row">
                    <label>请输入博客标题：</label>
                    <input type="text" onChange={this.getTitle.bind(this)}/>
                </div>
                <div className="blog-row">
                    <label>请输入博客作者：</label>
                    <input type="text" onChange={this.getName.bind(this)}/>
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