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
            page:1,
            current_stories:[]
        }
        stories:[]

    }

    render(){
        return (

            <div className='page'>
                <h1 className="title">Hacker News</h1>

                <ul>
                    {/* Each story is a Tile component*/}
                    {this.state.stories.map((story) => <Tile key={story} id={story}/>)}
                </ul>
                <div className='button_div'>
                <button className='load_button' onClick={()=>this.getNewPage()}>Load More</button>
                </div>
            </div>

        );
    }

    getNewPage(){
        this.setState({page:this.state.page+1});
        this.getData();
    }

    componentDidMount(){
         this.getData();
         console.log(this.state.stories)
    }

    getData(){
        fetch(' https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => response.json())
        .then(data=> this.setState({stories:data.slice((19*this.state.page)-19,19*this.state.page)}))
        .catch(e=>console.log('error', e))
    }
}

export default Home;
