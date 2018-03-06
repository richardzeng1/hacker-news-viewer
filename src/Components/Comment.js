import React from 'react';
import './CommentStyle.css';

/*
This is the Comment component. If the comment has a reply, the component will
render a new child Comment component.
*/

class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:null,
            by:"",
            kids:[],
            display:false
        }
    }

    render(){
        return(
            <div className='comment'>
                <div className='comment_text' dangerouslySetInnerHTML={{ __html: this.state.text}} />
                <p className='commentator'>submitted by: {this.state.by}</p>
                {this.displayComments()}
                {console.log(this.state.kids)}
                {this.displayButton()}
            </div>
        );
    }

    displayButton(){
        if (this.state.kids!=null){
            if(!this.state.display){
                return(
                    <button onClick={()=> this.setState({display:!this.state.display})}>View Replies</button>
                );
            }else{
                return(
                    <button onClick={()=> this.setState({display:!this.state.display})}>Close</button>
                );
            }
        }
    }

    displayComments(){
        if (this.state.display){
            if (this.state.kids!=null){
                return(
                    <div className='comment_section'>
                        {this.state.kids.map((kid) => <Comment key={kid} id={kid}/>)}
                    </div>
                );
            }
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
         fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`)
         .then(response => response.json())
         .then(data => this.setState({text: data.text, by:data.by, kids:data.kids}))
         .catch(e=>console.log('error', e))
    }
}
export default Comment;
