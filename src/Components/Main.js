import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Fetch from '../Fetch';

const api_url = "https://hacker-news.firebaseio.com/v0/"

const Main = () => (
    <Switch>
        <Route exact path = '/' component = {Home}/>
    </Switch>
);

export default Main;
