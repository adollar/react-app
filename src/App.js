import React, {Component} from 'react';
import Main from "./components/Main";
import {Footer} from "./components/Footer";
import {Header} from './components/Header/index'
import {Title} from './components/Title'

const props = {
    header: {
        positiveCntr: {
            startValue: 4,
            step: 3,
            color: 'red'

        },
        negativeCntr: {
            startValue: 200,
            step: 4,
            color: 'green'
        }
    },
    title: {
        mainCntr: {
            startValue: 34,
            step: 5,
            color: 'olive',
            size: 'small'
        }
    }
};

export default class App extends Component
{
    render() {
        return (
            <div>
                <Header cntr={props.header}/>
                <Title titleProps={props.title.mainCntr}/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}
