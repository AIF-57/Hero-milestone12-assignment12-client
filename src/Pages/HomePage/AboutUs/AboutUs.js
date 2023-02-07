import React from 'react';
import buildingBlock from '../../../utilities/images/company.jpg'

const AboutUs = () => {
    return (
        <div className='max-w-[1280px] mx-auto flex items-center gap-x-20 my-48'>
            <div className="content text-left">
                <p className='font-semibold tracking-widest text-primary'>WHO WE ARE</p>
                <p className='text-5xl font-bold text-secondary my-10'>We Are The Leading Industrial Factory In The World.</p>
                <p className='text-accent'>Today, MOUNTAIN is a global team of people delivering that same passion for improving the experience as well as expanding the potential of cycling.</p>
            </div>
            <div className="imageSection p-5">
                <img src={buildingBlock} alt="" className='rounded-sm'/>
            </div>
        </div>
    );
};

export default AboutUs;