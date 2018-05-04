import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './StoryPageStyle.css';
import Comment from './Comment';

/*
This is the compnent that displays the link to the story and the comment
section. Only the first layer of a comment is called. If a comment has a
reply, the Comment component will render another child comment.
*/

class StoryPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: null,
            text:null,
            url:null,
            id: parseInt(props.match.params.id, 10),
            kids:null
        }
    }

    render(){
        return(
            <div className='page'>
                <div>
                    <Link to = '/' className='title'>Y Hacker News</Link>
                </div>

                <div>
                    <Link to = '/' className='title'>
                        <button className='back_button'>Back</button>
                    </Link>
                </div>

                <div className='story_data'>
                    {this.getTitle()}
                    <div dangerouslySetInnerHTML={{ __html: this.state.text}} />
                </div>

                <div className='comment_section'>
                    {this.getComments()}
                </div>

                <div>
                    <Link to = '/' className='title'>
                        <button className='back_button'>Back</button>
                    </Link>
                </div>
            </div>
        )
    }

    getTitle(){
        if (this.state.url!=null){
            return(
                <a href={this.state.url} className='to_url'><h2>Link: {this.state.title}</h2></a>
            );
        }else{
            return(
                <h2>{this.state.title}</h2>
            );
        }
    }

    getComments(){
        if (this.state.kids!=null){
            return(
                this.state.kids.map((kid) => <Comment key={kid} id={kid}/>)
            );
        }else{
            return(<div></div>);
        }
    }

    componentDidMount(){
        this.getData();
    }

    componentWillUnmount(){
        this.setState({title:null, text:null, url:null, id:0});
    }

    getData(){
         fetch(`https://hacker-news.firebaseio.com/v0/item/${this.state.id}.json?print=pretty`)
         .then(response => response.json())
         .then(data => this.setState({title: data.title, text: data.text, url: data.url, kids: data.kids}))
         .catch(e=>console.log('error', e))
    }


}
export default StoryPage;
