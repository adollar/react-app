import React, {Component} from 'react';
import {Header} from '../../components/Header/index'
import {Title} from '../../components/Title'
import {Carousel} from '../../components/Carousel'
import {Registration} from "../../components/Registration";
import {Footer} from "../../components/Footer";
import {YoutubePlayer} from "../../components/YoutubePlayer";

export class Home extends Component
{
    render() {
        return (
            <div>
                <Header/>
                <Title/>
                <YoutubePlayer/>
                <Carousel/>
                <Registration/>
                <Footer/>
            </div>
        );
    }
}