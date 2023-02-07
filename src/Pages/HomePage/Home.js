import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import BusinessSummary from './BusinessSummary';
import ClientsReviews from './ClientsReviews/ClientsReviews';
import ProductGallery from './ProductGallery';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <ProductGallery></ProductGallery>
            <BusinessSummary></BusinessSummary>
            <ClientsReviews></ClientsReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;