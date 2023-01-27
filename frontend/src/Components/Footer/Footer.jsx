import React from 'react'
import "./_Footer.scss"
import { AiFillHeart } from "react-icons/ai"
const Footer = () => {
  return (
    <div className='footerSection'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 footerContent">
            <p>Copyright © 2023 All rights reserved | This template is made with <AiFillHeart />by <span>Colorlib</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
