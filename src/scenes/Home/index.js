import React, {Component} from 'react';
import {Carousel} from './components/Carousel'
import {Registration} from "./components/Registration";
import {YoutubePlayer} from "./components/YoutubePlayer";


export class Home extends Component
{
    render() {
        return (
            <div>
                {/*<YoutubePlayer/>*/}
                <Carousel/>
                <Registration/>
            </div>
        );
    }
}