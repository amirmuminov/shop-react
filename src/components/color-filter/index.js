import React from 'react';
import './color-filter.css';
import {Card, Button} from "antd";

function ColorFilter() {

    return (
        <Card title="COLORS" className="color-filter">
            <div className="colors">
                <Button type="primary" size={"large"} className="color-button white" style={{backgroundColor: "white"}}>&nbsp;</Button>
                <Button type="primary" size={"large"} className="color-button" style={{backgroundColor: "black"}}>&nbsp;</Button>
                <Button type="primary" size={"large"} className="color-button" style={{backgroundColor: "#e74c3c"}}>&nbsp;</Button>
                <Button type="primary" size={"large"} className="color-button" style={{backgroundColor: "#783ce7"}}>&nbsp;</Button>
                <Button type="primary" size={"large"} className="color-button" style={{backgroundColor: "#3498db"}}>&nbsp;</Button>
                <Button type="primary" size={"large"} className="color-button" style={{backgroundColor: "#00a847"}}>&nbsp;</Button>
                <Button type="primary" size={"large"} className="color-button" style={{backgroundColor: "#3ce7d9"}}>&nbsp;</Button>
                <Button type="primary" size={"large"} className="color-button" style={{backgroundColor: "#fa17bc"}}>&nbsp;</Button>
                <Button type="primary" size={"large"} className="color-button" style={{backgroundColor: "#a87e00"}}>&nbsp;</Button>
            </div>
        </Card>
    );
}

export default ColorFilter;
