import React from 'react';

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
                <h1>hello</h1>
                <p>{this.state.stories[0]}</p>
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

// const Home = () => (
//     <div>
//         <h1>hello</h1>
//     </div>
// )
export default Home;
