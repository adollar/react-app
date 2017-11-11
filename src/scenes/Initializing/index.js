import React, {Component} from 'react';
import {Header} from '../../components/Header/index'
import {Title} from '../../components/Title/index'
import {Footer} from "../../components/Footer/index";

export default class Initializing extends Component
{
    render() {
        return (
            <initializing>
                <Header/>
                <Title/>
                <Footer/>
            </initializing>
        );
    }
}