import React, {Component} from 'react';
import {Divider} from 'semantic-ui-react';
import {YoutubePlayer} from './YoutubePlayer/index'
import {Title} from './Title/index'
import {Carousel} from './Carousel/index'
import {Registration} from "./Registration/index";

import '../../styles/content.css'

export class Content extends Component
{
    render() {
        return (
            <div className="Content container-fluid">
                <div className="row">
                    <div className="seo-score scrollme">
                        <Title/>

                        <Divider section/>

                        <YoutubePlayer/>

                        <Divider section/>

                        <Carousel/>

                        <Divider section/>
                        
                        <Registration/>
                        
                    </div>
                </div>
            </div>
        );
    }
}