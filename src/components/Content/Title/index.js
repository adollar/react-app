import React, {Component} from 'react';
import '../../../styles/title.css';

export class Title extends Component
{
    render() {
        return (
            <div>
                <div id="mainTitle">
                    <h1>Главный заголовок</h1>
                </div>
                <div id="underTitle" className="col-md-8 col-md-offset-2">
                    <div className="underTitleText">Left subtitle</div>
                    <div className="underTitleRnd">12321</div>
                </div>
            </div>
        );
    }
}