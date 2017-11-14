import React, {Component} from 'react';
import {SubSteps} from "./SubSteps";

export class Row extends Component
{
    render() {
        return (
            <div>
                <div className="text">
                    {this.props.step.text}
                </div>
                <div className="image">
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                </div>
                {this.props.step.sub_steps ? <SubSteps sub_steps={this.props.step.sub_steps}/> : null}
            </div>
        );
    }
}