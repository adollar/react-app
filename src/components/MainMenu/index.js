import React from 'react'
import {Link} from 'react-router-dom'

const MainMenu = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/initializing'>Roster</Link></li>
            </ul>
        </nav>
    </header>
);

export default MainMenu
