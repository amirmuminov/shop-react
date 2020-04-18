import React, {useEffect} from 'react';
import {Card, Col, Row} from 'antd';
import './main-cards.css';
import {Link} from 'react-router-dom';
import CustomCard from "../custom-card";
import {connect} from "react-redux";
import {getProducts} from "../../store/actions/productActions";

const onMount = (props) => () => {
    props.getProducts();
};

function MainCards(props) {
    useEffect(onMount(props), []);

    const { Meta } = Card;

    const newestProducts = props.productReducer.products;
    const topRatedProducts = props.productReducer.products;

    const newestProductsList = newestProducts.map(product => (
            <CustomCard imageLink={product.image} colSpan={6} title={product.title} price={product.price} discount={product.discount}/>
        )
    );

    const topRatedProductsList = newestProducts.map(product => (
            <CustomCard imageLink={product.image} colSpan={4} title={product.title} price={product.price} discount={product.discount}/>
        )
    );


    return (
        <div className="main-cards">
            <div className="container">
                <Row gutter={16}>
                    <Col span={12}>
                        <Card className="main-banner" hoverable>
                            <img alt="example" src="http://eazzy.me/html/bella-men/assets/img/preview/shop/banner-1.jpg" className="main-banner-img" />
                            <div className="main-banner-content left-content">
                                <p>
                                    <span>Lorem ipsum</span>
                                </p>
                                <p>
                                    <span>dolor sir amet percpectum</span>
                                </p>
                            </div>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card className="main-banner" hoverable>
                            <img alt="example" src="http://eazzy.me/html/bella-men/assets/img/preview/shop/banner-2.jpg" className="main-banner-img" />
                            <div className="main-banner-content right-content">
                                <p>
                                    <span>Lorem ipsum</span>
                                </p>
                                <p>
                                    <span>dolor sir amet percpectum</span>
                                </p>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <div className="main-header-wrapper">
                    <Link to="/"><h1 className="main-header">featured <span>- newest -</span> top sellers</h1></Link>
                </div>
                <Row gutter={16}>
                    {newestProductsList[0]}
                    {newestProductsList[1]}
                    {newestProductsList[2]}
                    {newestProductsList[3]}
                </Row>
                <div className="message">
                    <div className="message-content">
                        <h1 className="message-content-heading">FREE SHIPPING ON ALL ORDERS OVER $45</h1>
                    </div>
                </div>
                <div className="main-header-wrapper">
                    <Link to="/"><h1 className="main-header"><span>top rated products</span></h1></Link>
                </div>
                <Row gutter={20}>
                    {topRatedProductsList[4]}
                    {topRatedProductsList[5]}
                    {topRatedProductsList[6]}
                    {topRatedProductsList[7]}
                    {topRatedProductsList[8]}
                    {topRatedProductsList[9]}
                </Row>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    productReducer: state.productReducer
});

const mapDispatchToProps = {
    getProducts
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainCards);
