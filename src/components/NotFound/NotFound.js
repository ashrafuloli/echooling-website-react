import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../images/bg.jpg';

const NotFound = () => {
    return (
        <>
            <div className="error-wrapper" style={{ backgroundImage: `url(${errorImg})` }}>
                <div className="content">
                    <h1 className="title">404</h1>
                    <p>OPPS, PAGE NOT FOUND</p>
                    <Link to="/" className="error-btn">Back to Home</Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;