"use client"

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Carousel() {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    

    return (
        <section >
            <h2 className="heading-primary--main white-head">Our Cell at a Glance</h2>
            <Slider {...settings} className="carousel-container" id="carousel">
                <div className="mySlides animate">
                    <img src="img/header_photo.jpg" alt="slide"/>
                        <div className="slide-text">Congratulations to CSE Students for getting Selected in <i>Hughes Systique.</i></div>
                </div>
                <div className="mySlides animate">
                    <img src="img/10l.jpg" alt="slide" />
                    <div className="slide-text">Our ME Students Selected in <i>Maruti.</i></div>
                </div>
                <div className="mySlides animate">
                    <img src="img/JSW.jpg" alt="slide" />
                    <div className="slide-text">Congratulations to EC and ME Students for getting placed in <i>JSW.</i></div>
                </div>
                <div className="mySlides animate">
                    <img src="img/p1.jpg" alt="slide" />
                    <div className="slide-text">Congratulations to CSE Students Placed in <i>Vivo Mobile.</i></div>
                </div>
                <div className="mySlides animate">
                    <img src="img/mepart.jpg" alt="slide" />
                    <div className="slide-text">Our Industry Partner for <i>Mechanical Branch.</i></div>
                </div>
                <div className="mySlides animate">
                    <img src="img/nupore.jpg" alt="slide" />
                    <div className="slide-text">Congratulations to Students for getting placed in <i>Federal Bank.</i></div>
                </div>
                <div className="mySlides animate">
                    <img src="img/honda1.jpg" alt="slide" />
                    <div className="slide-text">Our ME Students Placed in <i>Honda Motors.</i></div>
                </div>
                <div className="mySlides animate">
                    <img src="img/totalplaced.jpg" alt="slide" />
                    <div className="slide-text">Group Photo of all students who were placed previously.</div>
                </div>
                <div className="mySlides animate">
                    <img src="img/lumax.jpg" alt="slide"/>
                        <div className="slide-text">Congratulations to ME Students for getting placed in <i>Lumax Industries.</i></div>
                </div>
            </Slider>
        </section>
    );
}

export default Carousel;
