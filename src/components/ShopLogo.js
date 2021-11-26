import React from 'react';

const ShopLogo = (props) => {
    const {item} = props;

    return (
        <div className="shop-logo-container">
            {item.name === "logo-shopguitars" ? <img className="shop-logo" src={item.img} alt="" /> : null}
        </div>
    );
};

export default ShopLogo;
