import React from 'react';
import {Card, Col, Row, Button} from 'antd';
import './main-cards.css';
import {Link} from 'react-router-dom';
import {StarFilled, StarOutlined, ShoppingFilled, HeartFilled, SwapOutlined} from "@ant-design/icons";
import CustomCard from "../custom-card";

function MainCards() {

    const { Meta } = Card;

    return (
        <div className="main-cards">
            <div className="container">
                <Row gutter={16}>
                    <Col span={12}>
                        <Card className="main-banner" hoverable>
                            <img alt="example" src="http://eazzy.me/html/bella-men/assets/img/preview/shop/banner-1.jpg" className="main-banner-img" />
                            <div className="main-banner-content left-content">
                                <p>
                                    <span>Lorem ipsum</span>
                                </p>
                                <p>
                                    <span>dolor sir amet percpectum</span>
                                </p>
                            </div>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card className="main-banner" hoverable>
                            <img alt="example" src="http://eazzy.me/html/bella-men/assets/img/preview/shop/banner-2.jpg" className="main-banner-img" />
                            <div className="main-banner-content right-content">
                                <p>
                                    <span>Lorem ipsum</span>
                                </p>
                                <p>
                                    <span>dolor sir amet percpectum</span>
                                </p>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <div className="main-header-wrapper">
                    <Link to="/"><h1 className="main-header">featured <span>- newest -</span> top sellers</h1></Link>
                </div>
                <Row gutter={16}>
                    <CustomCard imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-1.jpg"} colSpan={6}/>
                    <CustomCard imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-2.jpg"} colSpan={6}/>
                    <CustomCard imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-3.jpg"} colSpan={6}/>
                    <CustomCard imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-4.jpg"} colSpan={6}/>
                </Row>
                <div className="message">
                    <div className="message-content">
                        <h1 className="message-content-heading">FREE SHIPPING ON ALL ORDERS OVER $45</h1>
                    </div>
                </div>
                <div className="main-header-wrapper">
                    <Link to="/"><h1 className="main-header"><span>top rated products</span></h1></Link>
                </div>
                <Row gutter={20}>
                    <CustomCard imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-rated-1.jpg"} colSpan={4}/>
                    <CustomCard imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-rated-2.jpg"} colSpan={4}/>
                    <CustomCard imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-rated-3.jpg"} colSpan={4}/>
                    <CustomCard imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-rated-4.jpg"} colSpan={4}/>
                    <CustomCard imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-rated-5.jpg"} colSpan={4}/>
                    <CustomCard imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-rated-6.jpg"} colSpan={4}/>
                </Row>
            </div>
        </div>
    );
}

export default MainCards;
