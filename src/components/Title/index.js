import React, {Component} from 'react';
import {Counter} from '../Counter/index';

import '../../assets/styles/title.css';

export class Title extends Component
{
    render() {
        return (
            <div className="MainTitleWrapper">
                <div id="mainTitle">
                    <h1>Главный заголовок</h1>
                </div>
                <div id="underTitle" className="col-md-8 col-md-offset-2">
                    <div className="left_text">Left subtitle</div>
                    <div className="right_text">
                       <Counter/> 
                    </div>
                </div>
            </div>
        );
    }
}