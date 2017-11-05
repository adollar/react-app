import React, {Component} from 'react';
import logo from '../../img/logo.png';

export class Header extends Component
{
    render() {
        return (
            <header className="header" id="site-header">
                <div className="container">
                    <div className="header-content-wrapper">
                        <div className="logo">
                            <img src={logo} alt="Hyip EV SSL"/>
                        </div>
                        <nav id="primary-menu" className="primary-menu">
                            <div>
                                <span id="location">location</span>
                            </div>
                            <div>
                                <span>Some text</span>
                                <span id="rnd_num_negative">rnd_num_negative</span>
                            </div>
                            <div>
                                <span>Some text</span>
                                <span id="rnd_num_positive">rnd_num_positive</span>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

