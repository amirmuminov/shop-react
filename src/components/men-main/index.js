import React from 'react';
import './men-main.css';
import {Link} from "react-router-dom";
import {Row} from "antd";
import Filter from "../filter";
import MenMainContent from "../men-main-content";

function MenMain() {
    return (
        <div>
            <div className="contact-header">
                <h1>CATEGORY PAGE</h1>
                <div className="path">
                    <Link to="/"><span className="path-name">Home </span></Link>
                    <span className="path-arrow"> > </span>
                    <Link to="#"><span className="path-name">Shop </span></Link>
                    <span className="path-arrow"> > </span>
                    <span className="path-name">Category Grid View Page With Left Sidebar </span>
                </div>
            </div>
            <div className="container">
                <Row className="men-main" gutter={30}>
                    <Filter/>
                    <MenMainContent/>
                </Row>
            </div>
        </div>
    );
}

export default MenMain;
