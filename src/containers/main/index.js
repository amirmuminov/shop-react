import React from 'react';
import './main.css';
import Header from "../../components/header";
import CarouselMain from "../../components/carousel";
import MainCards from "../../components/main-cards";
import Blog from '../../components/blog';
import Brands from "../../components/brands";
import Top from '../../components/top';
import Footer from "../../components/footer";

function Main() {
    return (
        <div>
            <Header/>
            <CarouselMain/>
            <MainCards/>
            <Blog/>
            <Brands/>
            <Top/>
            <Footer/>
        </div>
    );
}

export default Main;
