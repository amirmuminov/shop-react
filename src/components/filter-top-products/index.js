import React from 'react';
import './filter-top-products.css';
import {Button, Input, Carousel} from "antd";
import CustomCard from "../custom-card";

function FilterTopProducts() {

    return (
        <div className="filter-top-products">
            <div className="filter-tags-header">
                <h4>top products</h4>
                <Button type="default" className="card-button" size={"large"}>
                    see all
                </Button>
            </div>
            <Carousel>
                <div>
                    <CustomCard imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-1.jpg"} colSpan={24}/>
                </div>
                <div>
                    <CustomCard imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-2.jpg"} colSpan={24}/>
                </div>
                <div>
                    <CustomCard imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/product-3.jpg"} colSpan={24}/>
                </div>
            </Carousel>
        </div>
    );
}

export default FilterTopProducts;
