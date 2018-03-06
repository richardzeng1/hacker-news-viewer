import React from 'react';
import Tile from './Tile';
import { Link } from 'react-router-dom';
import './HomeStyle.css';

/*
This is where top 20 stories are rendered.
*/

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            stories:[],
            page:0
        }
        this.getData();
    }

    render(){
        return (

            <div className='page'>

                <h1 className="title">Hacker News</h1>

                <ul>
                    {/* Each story is a Tile component*/}
                    {this.state.stories.map((story) => <Tile key={story} id={story}/>)}
                </ul>
            </div>

        );
    }

    componentDidMount(){
         this.getData();
    }

    getData(){
        fetch(' https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => response.json())
        .then(data=> this.setState({stories:data.slice(0,19)}))
        .catch(e=>console.log('error', e))
    }
}

export default Home;
