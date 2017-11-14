import React, {Component} from 'react';
import {ProgressBar} from "../../components/Progress";
import {Steps} from "./components/Steps";

import './assets/initializing.css';

const loader_steps = [
    {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
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
                <ProgressBar/>
                <Steps loader_steps={loader_steps}/>
            </initializing>
        );
    }
}