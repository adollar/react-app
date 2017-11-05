import React, {Component} from 'react';

import {YoutubePlayer} from './YoutubePlayer/index'
import {Title} from './Title/index'
import {Slider} from './Slider/index'

import '../../styles/content.css'

export class Content extends Component
{
    render() {
        return (
            <div className="Content container-fluid">
                <div className="row">
                    <div className="seo-score scrollme">
                        <div className="container">
                            <div className="row">
                                <div className="seo-score-content align-center">
                                    <div className="heading align-center">
                                        <Title/>
                                        <YoutubePlayer/>
                                        <Slider/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}