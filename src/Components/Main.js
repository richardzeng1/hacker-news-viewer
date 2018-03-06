import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import StoryPage from './StoryPage';
/*
This page contains the routing for the application.
Note, some links redirect user to outside the application.
*/

const api_url = "https://hacker-news.firebaseio.com/v0/"

const Main = () => (
    <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route path ='/:id' component = {StoryPage}/>
    </Switch>
);

export default Main;
