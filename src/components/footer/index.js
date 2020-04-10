import React from 'react';
import './footer.css';
import {Row, Col, Button, Input} from "antd";
import {CaretRightOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import Tags from "../tags";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <Row gutter={30} className="footer-items">
                    <Col span={6} className="footer-item">
                        <div className="footer-header">
                            <h3>about us</h3>
                            <hr/>
                        </div>
                        <div className="footer-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin ultrices suscipit. Sed commodo vel mauris vel dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="footer-social">

                        </div>
                    </Col>
                    <Col span={6} className="footer-item">
                        <div className="footer-header">
                            <h3>news letter</h3>
                            <hr/>
                        </div>
                        <div className="footer-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Input placeholder="Enter Your Mail and Get $10 Cash" className="header-main-input"/>
                            <Button type="default" className="footer-button" size={"large"}>
                                subscribe
                            </Button>
                        </div>
                    </Col>
                    <Col span={6} className="footer-item">
                        <div className="footer-header">
                            <h3>information</h3>
                            <hr/>
                        </div>
                        <div className="footer-content">
                            <ul className="footer-list">
                                <li><Link to="" className="footer-link"><CaretRightOutlined  className="footer-list-arrow" />About Us</Link></li>
                                <li><Link to="" className="footer-link"><CaretRightOutlined  className="footer-list-arrow" />Delivery Information</Link></li>
                                <li><Link to="" className="footer-link"><CaretRightOutlined  className="footer-list-arrow" />Contact Us</Link></li>
                                <li><Link to="" className="footer-link"><CaretRightOutlined  className="footer-list-arrow" />Terms and Conditions</Link></li>
                                <li><Link to="" className="footer-link"><CaretRightOutlined  className="footer-list-arrow" />Private Policy</Link></li>
                            </ul>

                        </div>
                    </Col>
                    <Col span={6} className="footer-item">
                        <div className="footer-header">
                            <h3>item tags</h3>
                            <hr/>
                        </div>
                        <Tags/>
                    </Col>
                </Row>
            </div>
        </footer>
    );
}

export default Footer;
