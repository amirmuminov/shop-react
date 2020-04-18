import React from 'react';
import './filter.css';
import {Col, Input, Menu} from "antd";
import FilterMenu from "../filter-submenu";
import ColorFilter from "../color-filter";
import PriceFilter from "../price-filter";
import FilterTabs from "../filter-tabs";
import TopItems from "../top-items";
import FilterTags from "../filter-tags";
import FilterTopProducts from "../filter-top-products";
import AddProductModal from "../add-product-modal";

function Filter() {

    const { Search } = Input;

    return (
        <Col span={6} className="filter">
            <div className="search-input">
                <Search className="header-main-input"
                        placeholder="What are you looking?"
                        onSearch={value => console.log(value)}
                        size={"large"}
                />
            </div>
            <FilterMenu/>
            <ColorFilter/>
            <PriceFilter/>
            <FilterTabs
                firstImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-1.jpg"}
                secondImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-2.jpg"}
                thirdImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-3.jpg"}
                fourthImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-4.jpg"}
                fifthImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-5.jpg"}
                sixthImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-6.jpg"}
                seventhImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-7.jpg"}
                eighthImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-8.jpg"}
                ninthImageLink={"http://eazzy.me/html/bella-men/assets/img/preview/shop/top-sellers-9.jpg"}
            />
            <FilterTags/>
            <FilterTopProducts/>
            <AddProductModal/>
        </Col>
    );
}

export default Filter;
