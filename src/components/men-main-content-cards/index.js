import React, {useEffect} from 'react';
import './men-main-content-cards.css';
import {Row} from "antd";
import CustomCard from "../custom-card";
import {connect} from "react-redux";
import {getProducts} from '../../store/actions/productActions';

const onMount = (props) => () => {
        props.getProducts();
};

function MenMainContentCards(props) {

        useEffect(onMount(props), []);

        const products = props.productReducer.products;

        const productsList = products.map(product => (
            <CustomCard imageLink={product.image} colSpan={8} title={product.title} price={product.price} discount={product.discount}/>
        ));

    return (
        <Row gutter={30} className="men-main-content-cards">
                {productsList}
                {productsList[1]}
                {productsList[2]}
        </Row>
    );
}

const mapStateToProps = state => ({
        productReducer: state.productReducer,
});

const mapDispatchToProps = {
        getProducts
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenMainContentCards);
