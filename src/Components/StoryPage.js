import React from 'react';
import Fetch from '../Fetch';
import { Switch, Route, Link } from 'react-router-dom';
import './StoryPageStyle.css';

class StoryPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: "",
            text:"",
            url:null,
            id: parseInt(props.match.params.id, 10)
        }
    }

    render(){
        return(
            <div className='page'>
                <Link to = '/' className='title'>Y Hacker News</Link>
                <div className='story_data'>
                    <a href={this.state.url} className='to_url'><h2>{this.state.title}</h2></a>
                    <h4 className='story_text'>{this.state.text}</h4>
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
         .then(data => this.setState({title: data.title, text: data.text, url: data.url}))
         .catch(e=>console.log('error', e))
    }


}
export default StoryPage;
