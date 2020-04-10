import React from 'react';
import './price-filter.css';
import {Button, Card, Input, Slider} from "antd";

function PriceFilter() {

    const marks = {
        0: '0$',
        500: '500$',
    };

    return (
        <Card title="PRICE" className="color-filter">
            <Slider range marks={marks} defaultValue={[26, 137]} max={500} />
            <Button type="primary" className="filter-button" size={"large"}>filter</Button>
        </Card>
    );
}

export default PriceFilter;
