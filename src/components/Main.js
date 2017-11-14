import React, {Component} from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import {Home} from '../scenes/Home/index'
import Initializing from '../scenes/Initializing/index'
import NotFound from '../scenes/Error/index'

import '../assets/styles/content.css'

export default class Main extends Component
{
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/steps' component={Initializing}/>
                    <Route path="*" component={NotFound} />
                </Switch>
            </main>
        );
    }
}