import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {/* <li><NavLink to="/">Home</NavLink></li> */}
            {/* <button>
                <NavLink to="/">Home</NavLink>
            </button> */}
            <Link to="/">
                <button>Go Back Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;