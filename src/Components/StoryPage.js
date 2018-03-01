import React from 'react';
import Fetch from '../Fetch';

class StoryPage extends React.Component{

    render(){
        
        console.log(parseInt(this.props.match.params.id, 10));
        return true;
    }

    // get_data(){
    //     fetch(`https://hacker-news.firebaseio.com/v0/${this.props.id}`)
    //     .then(response => response.json())
    //     .then(data => this.setState({stories: data}))
    //     .catch(e=>console.log('error', e))
    // }


}
export default StoryPage;
