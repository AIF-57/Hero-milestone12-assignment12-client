import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import AboutUs from './AboutUs/AboutUs';
import BusinessFeature from './BusinessFeature';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import ClientsReviews from './ClientsReviews/ClientsReviews';
import ProductGallery from './ProductGallery';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <BusinessSummary></BusinessSummary>
            <AboutUs></AboutUs>
            <ProductGallery></ProductGallery>
            <BusinessFeature></BusinessFeature>
            <ClientsReviews></ClientsReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;