import React, {Component} from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import {Home} from '../scenes/Home/index'
import Initializing from '../scenes/Initializing/index'

import '../assets/styles/content.css'

export class Main extends Component
{
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/initializing' component={Initializing}/>
                </Switch>
            </main>
        );
    }
}