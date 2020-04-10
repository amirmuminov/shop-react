import React from 'react';
import './top.css';
import {Row, Col} from "antd";
import TopItems from "../top-items";

function Top() {
    return (
        <div>
            <div className="container">
                <Row className="main-top" gutter={25}>

                        <TopItems
                            firstImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-1.jpg"}
                            secondImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-2.jpg"}
                            thirdImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-3.jpg"}
                            title={"TOP SELLERS"}
                        />
                        <TopItems
                            firstImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-4.jpg"}
                            secondImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-5.jpg"}
                            thirdImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-6.jpg"}
                            title={"TOP ACCESSORIES"}
                        />
                        <TopItems
                            firstImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-7.jpg"}
                            secondImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-8.jpg"}
                            thirdImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-9.jpg"}
                            title={"TOP NEWEST"}
                        />

                </Row>
            </div>
        </div>
    );
}

export default Top;
