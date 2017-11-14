import React, {Component} from 'react';
import {Counter} from './Counter';

import '../assets/styles/title.css';

export class Title extends Component
{
    render() {
        console.log(this.props, 'title');
        return (
            <div className="MainTitleWrapper">
                <div id="mainTitle">
                    <h1>Главный заголовок</h1>
                </div>
                <div id="underTitle" className="col-md-8 col-md-offset-2">
                    <div className="left_text">Подзаголовок заголовка</div>
                    <div className="right_text">
                       <Counter cntr={this.props.titleProps}/> 
                    </div>
                </div>
            </div>
        );
    }
}