import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react';
import { Link } from 'react-router-dom';
import './TileStyle.css';

/*
Each story on the main page is represented as a Tile component.
It displays a Link component to the comment and story, the score and who
submitted the story.
*/
class Tile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:"",
            by:"",
            score:"",
            url:null
        }

    }

    render(){
        return(
            <div className="tile">
                <Link to ={`/${this.props.id}`} className="link">
                    <h4 className="mainData">{this.state.title}</h4>
                </Link>
                <p className="supData">Submited by: {this.state.by}</p>
                <p className="supData">Score: {this.state.score}</p>
            </div>
        );
    }

    componentDidMount(){
        this.getData();
    }

    componentWillUnmount(){
        this.setState({title:""});
    }

    getData(){
         fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`)
         .then(response=>response.json())
         .then(data=> this.setState({title: data.title, by:data.by, score:data.score, url:data.url}))
         .catch(e=>console.log('error', e))
    }
}

Tile.propTypes = {
    id: PropTypes.number,
}

export default Tile;
