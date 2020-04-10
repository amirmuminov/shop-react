import React from 'react';
import './brands.css';
import {Row, Col} from "antd";

function Brands() {
    return (
        <div className="brands-block">
            <div className="container">
                <div className="brand-header">
                    <h1 className="main-header"><span>BRAND & CLIENTS</span></h1>
                </div>
                <Row className="brands" gutter={20}>
                    <Col span={4} className="brand">
                        <img src="http://eazzy.me/html/bella-men/assets/img/preview/partners/brand-logo.jpg" alt=""/>
                    </Col>
                    <Col span={4} className="brand">
                        <img src="http://eazzy.me/html/bella-men/assets/img/preview/partners/brand-logo.jpg" alt=""/>
                    </Col>
                    <Col span={4} className="brand">
                        <img src="http://eazzy.me/html/bella-men/assets/img/preview/partners/brand-logo.jpg" alt=""/>
                    </Col>
                    <Col span={4} className="brand">
                        <img src="http://eazzy.me/html/bella-men/assets/img/preview/partners/brand-logo.jpg" alt=""/>
                    </Col>
                    <Col span={4} className="brand">
                        <img src="http://eazzy.me/html/bella-men/assets/img/preview/partners/brand-logo.jpg" alt=""/>
                    </Col>
                    <Col span={4} className="brand">
                        <img src="http://eazzy.me/html/bella-men/assets/img/preview/partners/brand-logo.jpg" alt=""/>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Brands;
