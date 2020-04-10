import React from "react";
import { Carousel } from 'antd';
import './carousel.css';
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

function CarouselMain() {
    return (
        <div className="carousel">
            <Carousel autoplay className="main-carousel">
                <div>
                    <img src="http://eazzy.me/html/bella-men/assets/img/preview/slider/slide-1.jpg" alt=""/>
                </div>
                <div>
                    <img src="http://eazzy.me/html/bella-men/assets/img/preview/slider/slide-2.jpg" alt=""/>
                </div>
                <div>
                    <img src="http://eazzy.me/html/bella-men/assets/img/preview/slider/slide-3.jpg" alt=""/>
                </div>
            </Carousel>
        </div>
    );
}

export default CarouselMain;