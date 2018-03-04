import React from 'react';

class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:null,
            by:""
        }
    }

    render(){
        return(
            <div>
                <div dangerouslySetInnerHTML={{ __html: this.state.text}} />
                {this.state.by}
            </div>
        );
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
         fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`)
         .then(response => response.json())
         .then(data => this.setState({text: data.text, by:data.by}))
         .catch(e=>console.log('error', e))
    }
}
export default Comment;
