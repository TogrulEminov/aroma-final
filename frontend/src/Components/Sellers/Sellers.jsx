import React from 'react'
import "./_Sellers.scss"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Sellers = () => {
    return (
        <div className='sellerSection'>
            <div className="container-fluid">
                <div className='headerTitle'>
                    <h3>Popular Item in the market</h3>
                    <h1>Best Sellers</h1>
                    <div className="headerLine"></div>
                </div>
                <div className="sellerCard">
                    <Swiper
                        slidesPerView={3}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}

                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >   <SwiperSlide>
                            <div className="col-3 card">
                                <div className='headerImage'>
                                    <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide2.png.webp" alt="" />
                                </div>
                                <h5>Accessories</h5>
                                <h3>Quzartz Belt Watch</h3>
                                <h4>$150.00</h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-3 card">
                                <div className='headerImage'>
                                    <img src="https://preview.colorlib.com/theme/aroma/img/product/product8.png.webp" alt="" />
                                </div>
                                <h5>Beauty</h5>
                                <h3>Women Freshwash</h3>
                                <h4>$150.00</h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>   <div className="col-3 card">
                            <div className='headerImage'>
                                <img src="https://preview.colorlib.com/theme/aroma/img/product/product7.png.webp" alt="" />
                            </div>
                            <h5>Accessories</h5>
                            <h3>Quzartz Belt Watch</h3>
                            <h4>$150.00</h4>
                        </div></SwiperSlide>
                        <SwiperSlide>   <div className="col-3 card">
                            <div className='headerImage'>
                            <img src="https://preview.colorlib.com/theme/aroma/img/product/product8.png.webp" alt="" />

                            </div>
                            <h5>Decor</h5>
                            <h3>Room Flahs Light</h3>
                            <h4>$150.00</h4>
                        </div></SwiperSlide>
                        <SwiperSlide>
                            <div className="col-3 card">
                                <div className='headerImage'>
                                <img src="https://preview.colorlib.com/theme/aroma/img/product/product8.png.webp" alt="" />

                                </div>
                                <h5>Beauty</h5>
                                <h3>Women Freshwash</h3>
                                <h4>$150.00</h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-3 card">
                                <div className='headerImage'>
                                <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide2.png.webp" alt="" />

                                </div>
                                <h5>Accessories</h5>
                                <h3>Quzartz Belt Watch</h3>
                                <h4>$150.00</h4>
                            </div>
                        </SwiperSlide>
                    </Swiper>


                    <div className="row">

                    </div>



                </div>
            </div>
        </div>
    )
}

export default Sellers
