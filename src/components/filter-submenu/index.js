import React from 'react';
import './filter-menu.css';
import {Menu} from "antd";

function FilterMenu() {

    const {SubMenu} = Menu;

    return (
        <Menu className="filter-menu"
              defaultSelectedKeys={['1']}
              mode="inline"
        >
            <SubMenu
                key="sub1"
                style={{color: "black"}}
                title={
                    <span>
                    <span>Man</span>
                </span>
                }
            >
                <Menu.Item key="1" className="filter-submenu">
                    <span>Sweater & Knits</span><span>12</span>
                </Menu.Item>
                <Menu.Item key="2" className="filter-submenu">
                    <span>Jacket & Coats</span><span>12</span>
                </Menu.Item >
                <Menu.Item key="3" className="filter-submenu">
                    <span>Denim</span><span>12</span>
                </Menu.Item>
                <Menu.Item key="4" className="filter-submenu">
                    <span>Pants</span><span>12</span>
                </Menu.Item>
                <Menu.Item key="5" className="filter-submenu">
                    <span>Shorts</span><span>12</span>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                style={{color: "black"}}
                title={
                    <span>
                    <span>Women</span>
                </span>
                }
            >
                <Menu.Item key="1" className="filter-submenu">
                    <span>Sweater & Knits</span><span>12</span>
                </Menu.Item>
                <Menu.Item key="2" className="filter-submenu">
                    <span>Jacket & Coats</span><span>12</span>
                </Menu.Item >
                <Menu.Item key="3" className="filter-submenu">
                    <span>Denim</span><span>12</span>
                </Menu.Item>
                <Menu.Item key="4" className="filter-submenu">
                    <span>Pants</span><span>12</span>
                </Menu.Item>
                <Menu.Item key="5" className="filter-submenu">
                    <span>Shorts</span><span>12</span>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub3"
                style={{color: "black"}}
                title={
                    <span>
                    <span>Dress</span>
                </span>
                }
            >
                <Menu.Item key="1" className="filter-submenu">
                    <span>Sweater & Knits</span><span>12</span>
                </Menu.Item>
                <Menu.Item key="2" className="filter-submenu">
                    <span>Jacket & Coats</span><span>12</span>
                </Menu.Item >
                <Menu.Item key="3" className="filter-submenu">
                    <span>Denim</span><span>12</span>
                </Menu.Item>
                <Menu.Item key="4" className="filter-submenu">
                    <span>Pants</span><span>12</span>
                </Menu.Item>
                <Menu.Item key="5" className="filter-submenu">
                    <span>Shorts</span><span>12</span>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub4"
                style={{color: "black"}}
                title={
                    <span>
                    <span>Top sellers</span>
                </span>
                }
            >
                <Menu.Item key="1" className="filter-submenu">
                    <span>Sweater & Knits</span><span>12</span>
                </Menu.Item>
                <Menu.Item key="2" className="filter-submenu">
                    <span>Jacket & Coats</span><span>12</span>
                </Menu.Item >
                <Menu.Item key="3" className="filter-submenu">
                    <span>Denim</span><span>12</span>
                </Menu.Item>
                <Menu.Item key="4" className="filter-submenu">
                    <span>Pants</span><span>12</span>
                </Menu.Item>
                <Menu.Item key="5" className="filter-submenu">
                    <span>Shorts</span><span>12</span>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub5"
                style={{color: "black"}}
                title={
                    <span>
                    <span>Accessories</span>
                </span>
                }
            >
                <Menu.Item key="1" className="filter-submenu">
                    <span>Sweater & Knits</span><span>12</span>
                </Menu.Item>
                <Menu.Item key="2" className="filter-submenu">
                    <span>Jacket & Coats</span><span>12</span>
                </Menu.Item >
                <Menu.Item key="3" className="filter-submenu">
                    <span>Denim</span><span>12</span>
                </Menu.Item>
                <Menu.Item key="4" className="filter-submenu">
                    <span>Pants</span><span>12</span>
                </Menu.Item>
                <Menu.Item key="5" className="filter-submenu">
                    <span>Shorts</span><span>12</span>
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="2" style={{color: "black"}}>
                Sale off
            </Menu.Item>
        </Menu>

    );
}

export default FilterMenu;
