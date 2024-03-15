import React from 'react';
import './styles.css';

const ContentButton = ({ title, type }) => {
    return (
        <button className={`content-btn ${type === 'primary' && 'primary-btn'}`}>
                {title}
        </button>
    );
};

export default ContentButton;