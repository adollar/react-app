import React, {Component} from 'react';
import {Counter} from '../Counter';
import {Navigation} from "./Navigation";

import '../../assets/styles/header.css'

export class Header extends Component
{
    render() {
        return (
            <header className="header" id="site-header">
                <div className="headerWrapper">
                    <Navigation/>
                    <nav id="primary-menu" className="primary-menu">
                        <div className="header_info_block">
                            <span className="smCntrTitle">Ваш город</span>
                            <span id="location">location</span>
                        </div>
                        <div className="header_info_block">
                            <span className="smCntrTitle">Позитивный счетчик</span>
                            <span className="smCntr" id="rnd_num_negative">
                            <Counter cntr={this.props.cntr.positiveCntr}/>
                        </span>
                        </div>
                        <div className="header_info_block">
                            <span className="smCntrTitle">Негативный счетчик</span>
                            <span className="smCntr" id="rnd_num_positive">
                                <Counter cntr={this.props.cntr.negativeCntr}/>
                            </span>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

