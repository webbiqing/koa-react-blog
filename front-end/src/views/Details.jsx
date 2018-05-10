import React from 'react'
import { render } from 'react-dom'
import {getData,postData} from "../http/index"
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg'
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Markdown from 'react-markdown'

class Details extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            blogContent:'',
            blogData:{}
        };
    }
    componentWillMount(){
        let params = {
            id:this.props.match.params.blogId
        }
        getData('/weapp/query-blog',params).then(res =>{
            this.setState({blogData:res.data})
            const contentBlock = htmlToDraft(res.data.content);
            if(contentBlock){
                const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                const editorState = EditorState.createWithContent(contentState);
                this.setState({
                    blogContent:editorState,    
                });
            }
        })
    }
    render(){
        return (
            <div className='blogDetail'>
                <div className='blogDetail-title'>{this.state.blogData.title}</div>
                <div className='blogDetail-category'>博客类别: {this.state.blogData.category_name}</div>
                <div className='blogDetail-author'>作者: {this.state.blogData.name}</div>
                <div className='blogDetail-content'>
                <Editor
                    editorState={this.state.blogContent} 
                    toolbarHidden
                    ReadOnly
                    localization={{ locale: 'zh' }}
                />
                </div>
            </div>
        )
    }
}

export default Details