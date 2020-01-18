import React from 'react';

const Header = () => {
    return (
        <header>
            <a 
             href="https://starwars.fandom.com/wiki/Galactic_Republic" 
             target="_blank">
                <h1 className='title'>Republic Co.</h1>
            </a>
            <a 
             href="https://www.sitepoint.com/tutorial-build-a-react-js-application-with-user-login-and-authentication/"
             target="_blank">
                <button id='login-button'>Login</button>
            </a> 
        </header>
    )
}

export default Header;