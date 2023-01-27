import React from 'react'
import "./_News.scss"
import { AiOutlineComment } from "react-icons/ai"
const News = () => {
    return (
        <div className='newsSection'>
            <div className="container-fluid">
                <div className='headerTitle'>
                    <h3>Popular Item in the market</h3>
                    <h1>Latest News</h1>
                    <div className="headerLine"></div>
                </div>
                <div className="newsCard">
                    <div className="row">
                        <div className="col-4 card">
                            <div className='headerImage'>
                                <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png.webp" alt="" />
                            </div>
                            <div className='adminComment'>
                               <ul>
                                <li>By Admin</li>
                                <li><AiOutlineComment /> 2 comments</li>
                               </ul>
                            </div>
                          <article>
                          <h2>The Richland Center Shooping News and weekly shooper</h2>
                            <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                            <h4>Read More</h4>
                          </article>
                        </div>
                        <div className="col-4 card">
                            <div className='headerImage'>
                                <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog2.png.webp" alt="" />
                            </div>
                            <div className='adminComment'>
                               <ul>
                                <li>By Admin</li>
                                <li><AiOutlineComment /> 2 comments</li>
                               </ul>
                            </div>
                          <article>
                          <h2>The Shopping News also offers top-quality printing services</h2>
                            <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                            <h4>Read More</h4>
                          </article>
                        </div>
                        <div className="col-4 card">
                            <div className='headerImage'>
                                <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog3.png.webp" alt="" />
                            </div>
                            <div className='adminComment'>
                               <ul>
                                <li>By Admin</li>
                                <li><AiOutlineComment /> 2 comments</li>
                               </ul>
                            </div>
                          <article>
                          <h2>Professional design staff and efficient equipment you’ll find we offer</h2>
                            <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                            <h4>Read More</h4>
                          </article>
                        </div>
                    </div>



                    <div className="row">

                    </div>



                </div>
            </div>
        </div>
    )
}

export default News
