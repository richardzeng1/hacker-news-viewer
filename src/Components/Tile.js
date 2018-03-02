import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './TileStyle.css';

class Tile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:""
        }

    }

    render(){
        return(
            <div className="tile">
                <Link to ={`/${this.props.id}`}>{this.state.title}</Link>
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
         .then(data=> this.setState({title: data.title})
         )

         .catch(e=>console.log('error', e))
    }
}

Tile.propTypes = {
    id: PropTypes.number,
}

export default Tile;
