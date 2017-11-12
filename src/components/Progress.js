import React, {Component} from 'react';
import {Progress} from 'semantic-ui-react'

import '../assets/styles/progress_bar.css';

export class ProgressBar extends Component
{
    render() {
        return (
            <div className="ProgressBar">
                <div className="progressBarWrapper">
                    <Progress percent={60} size='large' color='teal'>
                        large
                        
                    </Progress>
                </div>
            </div>
        );
    }
}