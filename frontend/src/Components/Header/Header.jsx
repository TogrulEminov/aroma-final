import React from 'react'
import "./_Header.scss"
import headerImg from "../../media/hero-banner.png"
const Header = () => {
    return (
        <div className='headerSection'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5 headerLeft">
                        <img src={headerImg} alt="header" />
                    </div>
                    <div className="col-5 headerRight">
                        <h3>Shop is fun</h3>
                        <h1>BROWSE OUR PREMIUM PRODUCT</h1>
                        <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
                        <button>Browse now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
