import React, {Component} from 'react';
import MainMenu from "./components/MainMenu";
import {Main} from "./components/Main";


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
