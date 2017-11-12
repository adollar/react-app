import React, {Component} from 'react';
import {Header} from '../../components/Header/index'
import {Title} from '../../components/Title'
import {Footer} from "../../components/Footer";
import {ProgressBar} from "../../components/Progress";

export default class Initializing extends Component
{
    render() {
        return (
            <initializing>
                <Header/>
                <Title/>
                <ProgressBar/>
                <Footer/>
            </initializing>
        );
    }
}