import React, {Component} from 'react';
import MainMenu from "./components/MainMenu/index";
import {Main} from "./components/Main/index";

import './assets/styles/main.css';

export default class App extends Component
{
    render() {
        return (
            <div>
                <MainMenu/>
                <Main/>
            </div>
        );
    }
}
