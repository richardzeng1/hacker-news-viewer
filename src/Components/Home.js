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
                <h2 className='page_indicator'>Page: {this.state.page}</h2>
                    <button className='previous_button' onClick={()=>this.getNewPage(-1)}>Previous</button>
                    <button className='next_button' onClick={()=>this.getNewPage(1)}>Next</button>
                </div>
            </div>

        );
    }

    // Get next 30 stories
    getNewPage(incrementor){
        this.setState({page:this.state.page+incrementor});
        this.getData();
    }

    // Scrolls to top of page when new stories loaded
    componentDidUpdate(){
        window.scrollTo(0,0);
    }

    componentDidMount(){
         const cachedPage = sessionStorage.getItem('page');
         if (cachedPage){
             this.setState({page:cachedPage});
         }else{
             this.setState({page:1});
         }

         this.getData();
         console.log(this.state.stories)
    }

    componentWillUnmount(){
         sessionStorage.setItem('page', this.state.page);
    }

    getData(){
        fetch(' https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => response.json())
        .then(data=> this.setState({stories:data.slice((29*this.state.page)-29,29*this.state.page)}))
        .catch(e=>console.log('error', e))
    }
}

export default Home;
