import React, {Component} from 'react';

import '../assets/styles/registration.css';

export class Registration extends Component
{
    render() {
        return (
            <div className="Registration">
                <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-xs-12 col-sm-12">
                    <div id="uLogin" data-ulogin="display=buttons;fields=first_name,photo,photo_big,last_name;providers=vkontakte,odnoklassniki,mailru,facebook;hidden=other;redirect_uri=;callback=preview;mobilebuttons=0;" className="seo-score-content align-center">
                        <div className="heading align-center">
                            <h2 className="h2 heading-title">Регистрация</h2>
                            <h4 className="h3 heading-title">Всего несколько секунд!</h4>
                            <p className="heading-text">Позаботься о своем будущем</p>
                        </div>

                        <a href=""
                            className="btn btn-medium btn--green btn-hover-shadow">
                            <span className="text">Регистрация</span>
                        </a>
                        <p className="heading-text">Или войди с помощью</p>
                        <div className="inline-block">
                            <a href="" data-uloginbutton="vkontakte"
                                className="btn btn-medium btn--green btn-hover-shadow btn-vk_registration">
                                <span className="text">Вконтакте</span>
                            </a>
                        </div>
                        <div className="inline-block">
                            <a href="" data-uloginbutton="odnoklassniki"
                                className="btn btn-medium btn--green btn-hover-shadow btn-ok_registration">
                                <span className="text">Одноклассники</span>
                            </a>
                        </div>
                        <div className="inline-block">
                            <a href="" data-uloginbutton="facebook"
                                className="btn btn-medium btn--green btn-hover-shadow btn-mail_registration">
                                <span className="text">Mail.Ru</span>
                            </a>
                        </div>
                        <div className="inline-block">
                            <a href="" data-uloginbutton="mailru"
                                className="btn btn-medium btn--green btn-hover-shadow btn-fb_registration">
                                <span className="text">Facebook</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
