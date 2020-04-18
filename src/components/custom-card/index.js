import React from 'react';
import './card.css';
import {Button, Card, Col} from "antd";
import {HeartFilled, ShoppingFilled, StarFilled, StarOutlined, SwapOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

function CustomCard(props) {

    const { Meta } = Card;

    return (
        <Col span={props.colSpan} className="card-item">
            <Card
                hoverable
                cover={<img alt="example" src={props.imageLink} />}
            >
                <Meta title={props.title} />
                <div className="card-item-rating">
                    <StarFilled className="star"/>
                    <StarFilled className="star"/>
                    <StarFilled className="star"/>
                    <StarFilled className="star"/>
                    <StarOutlined className="star" />
                </div>
                <div className="card-price">
                    <span className="discount-price">${props.price - (props.price * props.discount / 100)}</span>
                    <span className="actual-price">${props.price}</span>
                </div>
                <div className="card-buttons">
                    <Link to="#" className="header-main-button card-subbutton"><HeartFilled className="header-main-icon" /></Link>
                    <Button type="default" icon={<ShoppingFilled />} className="card-button" size={"large"}>
                        Add to cart
                    </Button>
                    <Link to="#" className="header-main-button card-subbutton"><SwapOutlined className="header-main-icon card-subbutton" /></Link>
                </div>
            </Card>
        </Col>
    );
}

export default CustomCard;
