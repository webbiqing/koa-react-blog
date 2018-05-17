import React from 'react'
import { render } from 'react-dom'
import {getData,postData} from "../http/index"
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw,convertFromRaw,ContentState } from 'draft-js';
import draftToMarkdown from 'draftjs-to-markdown';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import { message,Input,Select  } from 'antd';
const Option = Select.Option;

class editBlog extends React.Component{
    constructor(props) {
        super(props)
		this.state ={
            mainData:[],
            editorState:'',
            category:[]
		}
    }
    getTitle(e){
        this.setState({blogTitle: e.target.value});
    }
    getName(e){
        this.setState({blogName: e.target.value});
    }
    getFlag(e){
        this.setState({blogFlag: e.target.value});
    }
    onEditorStateChange(editorState){
        this.setState({
          editorState
        });
    };
    pushBlogData(){
        let params = {
            id:this.props.match.params.blogId,
            title:this.state.blogTitle,
            name:this.state.blogName,
            category:this.state.blogFlag,
            content:draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
        }
        postData('/weapp/update-blog',params).then(res =>{
            if(res.status == 200){
                message.success('修改成功！');
                this.props.history.push('/list');
            }
        })
    }
    setCategory = (value) => {
        this.setState({blogFlag:value});
    }
    getCategoryData = ()=>{
        getData('/weapp/search-category').then(res=>{
            this.setState({category:res.data})
        })
    }
    getBlogData = ()=>{
        let params = {
            id:this.props.match.params.blogId
        }
        getData('/weapp/query-blog',params).then(res =>{
            const blogData = res.data;
            this.setState({
                blogTitle:blogData.title,
                blogName:blogData.name,
                blogFlag:blogData.category_id,
                blogFlagName:blogData.category_name
            })
            const contentBlock = htmlToDraft(res.data.content);
            if(contentBlock){
                const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                const editorState = EditorState.createWithContent(contentState);
                this.setState({
                    editorState,    
                });
            }
        })
    }
    componentWillMount(){
        this.getCategoryData();                    
        this.getBlogData();
    }

    render(){
        return (
            <div className="blog">
                <div className="blog-title">编辑博客</div>
                <div className="blog-row">
                    <label>请输入博客标题：</label>
                    <Input placeholder="请输入博客标题" value={this.state.blogTitle} onChange={this.getTitle.bind(this)}/>
                </div>
                <div className="blog-row">
                    <label>请输入博客作者：</label>
                    <Input placeholder="请输入博客作者" value={this.state.blogName} onChange={this.getName.bind(this)}/>
                </div>
                <div className='blog-row'>
                    <label>请选择博客类别：</label>
                    <Select defaultValue={this.state.blogFlagName} style={{ width: 120 }} onChange={ this.setCategory }>
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
                        editorState={this.state.editorState} 
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

export default editBlog