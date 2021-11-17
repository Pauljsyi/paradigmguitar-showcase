import React from 'react'

const ShopLogo = (props) => {
    const {item} = props;

    return (
        <div className="shop-logo-container">
            {item.id === 1 ? <img className="shop-logo" src={item.img} alt="" /> : null}
        </div>
    )
}

export default ShopLogo
