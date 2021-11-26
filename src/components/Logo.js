import React from 'react';

const Logo = (props) => {
    const {item} = props

    return (
        <div className="logo-container">
            {item.name === "logo-paradigmguitar" ? <img className="paradigm-logo" src={item.img} alt="logo" /> : null}
        </div>
    );
};

export default Logo;
