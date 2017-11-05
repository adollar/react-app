import React, {Component} from 'react';
import contact from '../../img/contact9.png'

export class Footer extends Component
{
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
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
                </div>
                <div className="sub-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <span> Copyright © 2017 <a href="" target="_blank" className="sub-footer__link">Некоторый текст</a> Соглашение <a href=""> Некоторый текст.</a> </span>
                                <a className="back-to-top" href="">
                                    <svg className="back-to-top">
                                        back to top
                                    </svg>
                                </a></div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

