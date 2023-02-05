import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import BusinessSummary from './BusinessSummary';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;