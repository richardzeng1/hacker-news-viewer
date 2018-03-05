import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './StoryPageStyle.css';
import Comment from './Comment';

class StoryPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: "",
            text:"",
            url:null,
            id: parseInt(props.match.params.id, 10),
            kids:[]
        }
    }

    render(){
        return(
            <div className='page'>
                <Link to = '/' className='title'>Y Hacker News</Link>

                <div className='story_data'>
                    <a href={this.state.url} className='to_url'><h2>{this.state.title}</h2></a>
                    <div dangerouslySetInnerHTML={{ __html: this.state.text}} />
                </div>

                <div className='comment_section'>
                    {this.state.kids.map((kid) => <Comment key={kid} id={kid}/>)}
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.getData();
    }

    componentWillUnmount(){
        this.setState({title:"", text:"", url:"", id:0});
    }

    getData(){
         fetch(`https://hacker-news.firebaseio.com/v0/item/${this.state.id}.json?print=pretty`)
         .then(response => response.json())
         .then(data => this.setState({title: data.title, text: data.text, url: data.url, kids: data.kids}))
         .catch(e=>console.log('error', e))
    }


}
export default StoryPage;
