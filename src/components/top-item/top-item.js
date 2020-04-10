import React from 'react';
import './top-item.css';
import {StarFilled, StarOutlined} from "@ant-design/icons";

function TopItem(props) {
    return (
            <div className="post">
                <div className="post-image">
                    <img src={props.imageLink} alt=""/>
                </div>
                <div className="post-content">
                    <h4>Standard Product Header</h4>
                    <div className="card-item-rating">
                        <StarFilled className="star"/>
                        <StarFilled className="star"/>
                        <StarFilled className="star"/>
                        <StarFilled className="star"/>
                        <StarOutlined className="star" />
                    </div>
                    <div className="card-price">
                        <span className="discount-price">$400.00</span>
                        <span className="actual-price">$425.00</span>
                    </div>
                </div>
            </div>
    );
}

export default TopItem;
