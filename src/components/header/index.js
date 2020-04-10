import React, {useState} from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import {Row, Col, Select, Input} from "antd";
import {HeartFilled, SwapOutlined} from '@ant-design/icons';
import { Menu, Carousel  } from 'antd';

function Header() {

    const { Option } = Select;
    const { Search } = Input;
    const { SubMenu } = Menu;


    const [state, setState] = useState({current: 'mail'});


    return (
        <header>
            <div className="header">
                <Row className="header-links">
                    <Col span={12} className="header-links-left">
                        <ul>
                            <li><Link to="#">Login</Link></li>
                            <li><Link to="#">Not a member? Sign Up</Link></li>
                            <li><Link to="#">support@yourdomain.com</Link></li>
                        </ul>
                    </Col>
                    <Col span={12} className="header-links-right">
                        <ul>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="#">My Account</Link></li>
                            <li><Link to="#">Contact</Link></li>
                            <li><Link to="#">FAQ</Link></li>
                            <li><Link to="#">My Wishlist</Link></li>
                        </ul>
                    </Col>
                </Row>
                <div className="container">
                    <Row className="header-main">
                            <Col span={8}>
                                <Search className="header-main-input"
                                    placeholder="What are you looking?"
                                    onSearch={value => console.log(value)}
                                    size={"large"}
                                    style={{ width: 270 }}
                                />
                            </Col>
                            <Col span={8}>
                                <img src="http://eazzy.me/html/bella-men/assets/img/logo-bella-shop.png" alt="Bella Shop Logo"/>
                            </Col>
                            <Col span={8}>
                                <Link to="#" className="header-main-button"><HeartFilled className="header-main-icon" /></Link>
                                <Link to="#" className="header-main-button"><SwapOutlined className="header-main-icon" /></Link>
                            </Col>
                    </Row>
                </div>
                <div className="header-nav">
                    <Menu mode="horizontal" className="nav">
                        <Menu.Item key="home" className="nav-item-active">
                            <Link to="/">Homepage</Link>
                        </Menu.Item>
                        <Menu.Item key="shop">
                            <Link to="/">Shop</Link>
                        </Menu.Item>
                        <Menu.Item key="blog">
                            <Link to="/">Blog</Link>
                        </Menu.Item>
                        <Menu.Item key="portfolio">
                            <Link to="/">Portfolio</Link>
                        </Menu.Item>
                        <SubMenu
                            title={
                                <span className="Features">
                                Features
                                </span>
                            }
                        >
                            <Menu.ItemGroup title="Item 1">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Item 2">
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <Menu.Item key="men">
                            <Link to="/men">Men</Link>
                        </Menu.Item>
                        <Menu.Item key="women">
                            <Link to="/">Women</Link>
                        </Menu.Item>
                        <Menu.Item key="kids">
                            <Link to="/">New</Link>
                        </Menu.Item>
                        <Menu.Item key="sale">
                            <Link to="/">Sale</Link>
                        </Menu.Item>
                        <Menu.Item key="contact">
                            <Link to="/contact">Contact</Link>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
