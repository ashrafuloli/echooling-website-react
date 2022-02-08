import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { body, enrolled, faq, language, large, lectures, name, price, thumb, _id } = props.service;
    return (
        <>
            <div className="course-wrap">
                <div className="thumbnail">
                    <img src={thumb} alt={name} />
                </div>
                <div className="course-content">
                    <div className="price">${price}</div>
                    <div className="title">
                        <Link to={`/service/${_id}`}>{name}</Link>
                    </div>
                    <div className="meta">
                        <span> <b>{lectures}</b></span>
                        <span> <b>{enrolled}</b></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;