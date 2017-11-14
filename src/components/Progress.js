import React, {Component} from 'react';
import {Progress} from 'semantic-ui-react'

import '../assets/styles/progress_bar.css';

export class ProgressBar extends Component
{
    render() {
        return (
            <div className="ProgressBar">
                <div className="progressBarWrapper">
                    <Progress percent={20} size='large' color='teal'>
                    </Progress>
                </div>
            </div>
        );
    }
}