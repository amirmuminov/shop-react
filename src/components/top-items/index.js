import React from 'react';
import './top-item.css';
import {Button, Col} from "antd";
import TopItem from "../top-item/top-item";

function TopItems(props) {
    return (
        <Col span={8} className="main-top-items">
            <div className="main-top-item-header">
                <h1 className="main-header"><span>{props.title}</span></h1>
                <Button type="default" className="card-button" size={"large"}>
                    see all
                </Button>
            </div>
            <TopItem imageLink={props.firstImageLink}/>
            <TopItem imageLink={props.secondImageLink}/>
            <TopItem imageLink={props.thirdImageLink}/>
        </Col>
    );
}

export default TopItems;
