import React from 'react'

const Logo = (props) => {
    const {item} = props
    // console.log('item', item)
    // const found = item.find(e => e === 11)
    // console.log('found', found)

    return (
        <div className="logo-container">
            {item.id === 4 ? <img className="paradigm-logo" src={item.img} alt="logo" /> : null}
        </div>
    )
}

export default Logo
