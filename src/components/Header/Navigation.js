import React, {Component} from 'react';
import {Link} from 'react-router-dom'


export class Navigation extends Component
{
    render() {
        return (
            <ul id="navigation">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/steps'>Steps</Link></li>
            </ul>
        );
    }
}