import React, {Component} from 'react';
import {HeaderCounter} from './HeaderCounter';

import '../../assets/styles/header.css'
import {Navigation} from "./Navigation";

export class Header extends Component
{
    render() {
        return (
            <header className="header" id="site-header">
                <div className="headerWrapper">
                    <Navigation/>
                    <nav id="primary-menu" className="primary-menu">
                        <div className="header_info_block">
                            <span className="smCntrTitle">cuntr+</span>
                            <span id="location">location</span>
                        </div>
                        <div className="header_info_block">
                            <span className="smCntrTitle">blablalba</span>
                            <span className="smCntr" id="rnd_num_negative">
                            <HeaderCounter/>
                        </span>
                        </div>
                        <div className="header_info_block">
                            <span className="smCntrTitle">loremlorem</span>
                            <span className="smCntr" id="rnd_num_positive">
                                <HeaderCounter/>
                            </span>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

