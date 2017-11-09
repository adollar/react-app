import React, {Component} from 'react';
import Slider from 'react-slick';
import '../../../styles/slider.css';

export class Carousel extends Component
{
    render() {
        let settings = {
            dots: true,
            className: 'sample',
            infinite: true,
            speed: 500,
            autoplay: true,
            centerMode: false,
            focusOnSelect: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="Carousel">
                <Slider {...settings} >
                    <div><img src='http://placekitten.com/g/900/300' alt="kitten1"/></div>
                    <div><img src='http://placekitten.com/g/900/300' alt="kitten2"/></div>
                    <div><img src='http://placekitten.com/g/900/300' alt="kitten3"/></div>
                </Slider>
            </div>
        )
    }
}