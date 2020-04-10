import React from 'react';
import './men-main-content.css';
import {Col, Carousel} from "antd";
import MenMainContentFilter from "../men-main-content-filter";
import MenMainContentCards from "../men-main-content-cards";

function MenMainContent() {
    return (
        <Col span={18}>
            <Carousel autoplay>
                <div>
                    <img src="http://eazzy.me/html/bella-men/assets/img/preview/slider/slide-1-sub.jpg" alt="" className="carousel-image"/>
                </div>
                <div>
                    <img src="http://eazzy.me/html/bella-men/assets/img/preview/slider/slide-1-sub.jpg" alt="" className="carousel-image"/>
                </div>
            </Carousel>
            <MenMainContentFilter/>
            <MenMainContentCards />
        </Col>
    );
}

export default MenMainContent;
