import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import BusinessSummary from './BusinessSummary';
import ProductGallery from './ProductGallery';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <ProductGallery></ProductGallery>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;