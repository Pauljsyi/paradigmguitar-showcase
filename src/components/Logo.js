import React from 'react';

const Logo = (props) => {
    const {item} = props

    return (
        <div className="logo-container">
            {item.id === 4 ? <img className="paradigm-logo" src={item.img} alt="logo" /> : null}
        </div>
    );
};

export default Logo;
