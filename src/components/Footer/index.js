import React, {Component} from 'react';
import contact from '../../img/contact9.png'

import '../../styles/footer.css';

export class Footer extends Component
{
    render() {
        return (
            <footer className="footer">
                <div className="footerWrapper">
                    <div className="contacts">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="contacts-item">
                                <div className="icon js-animate-icon">
                                    <img src={contact} alt="green bar ssl for hyip"/>
                                </div>
                                <div className="content"><a href="" className="title">support@email.com</a>
                                    <p className="sub-title">Служба поддержки 24/7</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="contacts-item">
                                <div className="icon js-animate-icon">

                                </div>
                                <div id="modal_window" className="content"><a href=""
                                    className="title">Модальное окно</a>
                                    <p className="sub-title">Напиши нам!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="contacts-item">
                                <div className="icon js-animate-icon">

                                </div>
                                <div className="content"><a href="" target="_blank" className="title">г.Москва</a>
                                    <p className="sub-title">Некий адрес</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

