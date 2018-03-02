import React from 'react';
import Fetch from '../Fetch';
import { Link } from 'react-router-dom';

class StoryPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: "",
            text:"",
            url:"",
            id: parseInt(props.match.params.id, 10)
        }
    }

    render(){
        return(
            <div>
                <Link to = '/'>Home</Link>
                <h1>{this.state.title}</h1>
                <h1>{this.state.text}</h1>
                <h1>{this.state.url}</h1>
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
