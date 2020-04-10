import React from 'react';
import './men-main-content-cards.css';
import {Col, Carousel, Row} from "antd";
import MenMainContentFilter from "../men-main-content-filter";
import CustomCard from "../custom-card";

function MenMainContentCards() {
    return (
        <Row gutter={30} className="men-main-content-cards">
            <CustomCard colSpan={8} imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-1c.jpg"}/>
            <CustomCard colSpan={8} imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-2c.jpg"}/>
            <CustomCard colSpan={8} imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-3c.jpg"}/>
            <CustomCard colSpan={8} imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-4c.jpg"}/>
            <CustomCard colSpan={8} imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-5c.jpg"}/>
            <CustomCard colSpan={8} imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-6c.jpg"}/>
            <CustomCard colSpan={8} imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-7c.jpg"}/>
            <CustomCard colSpan={8} imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-8c.jpg"}/>
            <CustomCard colSpan={8} imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-9c.jpg"}/>
            <CustomCard colSpan={8} imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-10c.jpg"}/>
            <CustomCard colSpan={8} imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-11c.jpg"}/>
            <CustomCard colSpan={8} imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-12c.jpg"}/>
            <CustomCard colSpan={8} imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-13c.jpg"}/>
            <CustomCard colSpan={8} imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-14c.jpg"}/>
            <CustomCard colSpan={8} imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-15c.jpg"}/>
        </Row>
    );
}

export default MenMainContentCards;
