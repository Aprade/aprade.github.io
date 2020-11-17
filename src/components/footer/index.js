import './index.css';
import React from 'react';

import GitHubLogo from '../../assets/icons/brands/github.png';

function Footer () {
    return (
        <footer className="app-footer">
            <div className="powered">
                <img src={GitHubLogo} className="github-logo" alt="github logo" />
                <h1>
                    Powered by <a href="https://pages.github.com/">GitHub Pages</a>
                </h1>
            </div>
            <div className="site-info">
                <h1>
                    © 2020 Aprade, Inc.
                </h1>
            </div>
        </footer>
    );
}

export default Footer;