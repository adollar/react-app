import React, {Component} from 'react';
import {Row} from "./Row";

export class Steps extends Component
{
    render() {
        return (
            <div>
                <div id="updatable_fields">
                    <div className="wrapper">
                        <ul className="Rows">
                            {this.props.loader_steps.map((data, index) => {
                                return <li className="step" key={index}><Row step={data}/></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}