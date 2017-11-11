import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import './assets/styles/styles.css';
import './assets/styles/font-awesome.min.css';

import App from './App';

ReactDOM.render((
        <BrowserRouter>
            <App/>
        </BrowserRouter>)
    , document.getElementById('root'));