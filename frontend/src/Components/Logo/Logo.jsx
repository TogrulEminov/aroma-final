import React from 'react'
import "./_Logo.scss"
import { Link } from "react-router-dom"
import logo from "../../media/logo.png"
const Logo = () => {
    return (
        <div className='logo'>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
        </div>
    )
}

export default Logo
