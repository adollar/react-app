import React, {Component} from 'react';
import {Header} from '../../components/Header/index'
import {Title} from '../../components/Title/index'
import {Carousel} from '../../components/Carousel/index'
import {Registration} from "../../components/Registration/index";
import {Footer} from "../../components/Footer/index";
import {YoutubePlayer} from "../../components/YoutubePlayer/index";

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