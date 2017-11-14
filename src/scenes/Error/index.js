import React from 'react';

import './assets/error.css';

const NotFound = () =>
    <div className="error">
        <div className="errorWrapper">
            <h3>404 page not found</h3>
            <div className="alert" role="alert">
                We are sorry but the page you are looking for does not exist.
            </div>
        </div>
    </div>;

export default NotFound;