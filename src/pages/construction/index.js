import './index.css';
import React from 'react';

import ApradeLogo from '../../assets/aprade/logo.svg';

function Construction () {
    return (
        <>
            <header className="app-header">
                <img src={ApradeLogo} className="app-logo" alt="aprade logo" />
            </header>
            <body className="app-body">
                <h1>
                    This website is under construction
                </h1>
            </body>
        </>
    );
}

export default Construction;