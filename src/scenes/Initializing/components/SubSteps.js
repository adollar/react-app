import React, {Component} from 'react';

export class SubSteps extends Component
{
    render() {
        return (
            <ul className="sub_rows">
                {this.props.sub_steps.map((name, index) => {
                    return <li key={index}>
                        <div className="sub_image">
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                        </div>
                        <div className="sub_text text_sub_row">{name.text}</div>
                    </li>
                })}
            </ul>
        );
    }
}