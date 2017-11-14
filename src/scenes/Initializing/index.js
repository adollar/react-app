import React, {Component} from 'react';
import {Header} from '../../components/Header/index'
import {Title} from '../../components/Title'
import {Footer} from "../../components/Footer";
import {ProgressBar} from "../../components/Progress";
import {Steps} from "./components/Steps";

import './assets/initializing.css';

const loader_steps = [
    {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aliquam atque consequatur corporis eveniet nisi officia tempora tenetur voluptatem. Architecto, assumenda, ex. Autem deleniti est harum, nisi perspiciatis voluptates.'},
    {text: 'Simple text number two'},
    {
        text: 'Simple text number three',
        sub_steps: [
            {text: 'vkontakte'},
            {text: 'facebook'},
            {text: 'viber'},
        ]
    },
    {text: 'Simple text number four'},
];

export default class Initializing extends Component
{
    render() {
        return (
            <initializing>
                <Header/>
                <Title/>
                <ProgressBar/>
                <Steps loader_steps={loader_steps}/>
                <Footer/>
            </initializing>
        );
    }
}