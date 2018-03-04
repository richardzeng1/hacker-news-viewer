import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App';

render((
    <BrowserRouter style={{margin:0}}>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));
