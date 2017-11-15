import React, {Component} from 'react';
import {Progress} from 'semantic-ui-react'

import '../assets/styles/progress_bar.css';

export class ProgressBar extends Component
{
    state = {percent: 0};

    componentDidMount() {
        this.timerId = setInterval(() => {
            if(this.state.percent === 100) {
                clearInterval(this.timerId);
                return;
            }
            this.increment()
        }, 100)
    }

    increment = () => this.setState({
        percent: this.state.percent + 2,
    });

    render() {
        return (
            <div className="ProgressBar">
                <div className="progressBarWrapper">
                    <Progress
                        percent={this.state.percent}
                        label={this.state.percent + '%'}
                        size='large'
                        color='teal'>
                    </Progress>
                </div>
            </div>
        );
    }
}