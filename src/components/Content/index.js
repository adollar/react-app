import React, {Component} from 'react';
import {
    Grid,
    Image
} from 'semantic-ui-react';

import {YoutubePlayer} from './YoutubePlayer/index'
import {Title} from './Title/index'
import {Carousel} from './Carousel/index'

import '../../styles/content.css'

export class Content extends Component
{
    render() {
        return (
            <div className="Content container-fluid">
                <div className="row">
                    <div className="seo-score scrollme">
                        <Title/>
                        <YoutubePlayer/>
                        <Carousel/>
                    </div>
                </div>
            </div>
        );
    }
}