import React from 'react';
import './filter-tabs.css';
import {Tabs, Button} from "antd";
import TopItem from "../top-item/top-item";

function FilterTabs(props) {

    const { TabPane } = Tabs;

    return (
        <div>
            <Tabs defaultActiveKey="1">
                <TabPane tab="TOP" key="1">
                    <TopItem imageLink={props.firstImageLink}/>
                    <TopItem imageLink={props.secondImageLink}/>
                    <TopItem imageLink={props.thirdImageLink}/>
                </TabPane>
                <TabPane tab="SALE OFF" key="2">
                    <TopItem imageLink={props.fourthImageLink}/>
                    <TopItem imageLink={props.fifthImageLink}/>
                    <TopItem imageLink={props.sixthImageLink}/>
                </TabPane>
                <TabPane tab="DEALS" key="3">
                    <TopItem imageLink={props.seventhImageLink}/>
                    <TopItem imageLink={props.eighthImageLink}/>
                    <TopItem imageLink={props.ninthImageLink}/>
                </TabPane>
            </Tabs>
            <Button size={"large"} type={"primary"} className="filter-tabs-button">more products</Button>
        </div>
    );
}

export default FilterTabs;
