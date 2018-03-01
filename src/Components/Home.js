import React from 'react';
import Tile from './Tile';
import { Link } from 'react-router-dom';
// Where top 20 stories will be presented

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            stories:[]
        }
        this.get_data();
    }

    render(){
        return (
            <div>
                <h1>Stories</h1>
                <ul>
                    {this.state.stories.map((story) => <Tile key={story} id={story}/>)}
                </ul>
            </div>
        );
    }

    get_data(){
        fetch(' https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => response.json())
        .then(data => this.setState({stories: data}))
        .catch(e=>console.log('error', e))
    }
}

export default Home;
