import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
      <div>
        <div className='subFooter bg-secondary'>
          <footer className="footer max-w-[1280px] mx-auto px-5 py-10 text-white grid grid-cols-1 lg:grid-cols-11">
            <div className='lg:col-span-5'>
            <Link to='/' className="btn btn-ghost normal-case text-2xl italic font-extrabold text-base-100 ">Mountain</Link>
            </div> 
            <div className='text-xs'>
              <span className="footer-title">LIFE</span> 
              <Link className="link link-hover">Stories</Link> 
              <Link className="link link-hover">Athletes</Link> 
            </div> 



            <div className='text-xs lg:col-span-2'>
              <span className="footer-title">SERVICE/SUPPORT</span> 
              <Link className="link link-hover">Rider Support Contact</Link> 
              <Link className="link link-hover">Dealer Support</Link> 
              <Link className="link link-hover">Manuals, Documents & Videos</Link> 
              <Link className="link link-hover">Recalls</Link>
              <Link className="link link-hover">Warranty</Link>
              <Link className="link link-hover">Product Registration</Link>
            </div> 
            <div className='text-xs lg:col-span-2'>
              <span className="footer-title">APPS</span> 
              <Link className="link link-hover">AXS on the App Store</Link> 
              <Link className="link link-hover">AXS on Google Play</Link> 
              <Link className="link link-hover">AXS Web</Link>
            </div>
            <div className='text-xs'>
              <span className="footer-title">COMPANY</span> 
              <Link className="link link-hover">About</Link> 
              <Link className="link link-hover">Media</Link> 
              <Link className="link link-hover">Careers</Link>
              <Link className="link link-hover">Logos</Link>
              <Link className="link link-hover">Locations</Link>
            </div>



          </footer>
        </div>

        <div className="bottomFooter bg-[#252626]">
          <footer className="footer max-w-[1280px] mx-auto p-4 text-neutral-content">
            <div className="text-gray-300 text-[10px] font-semibold ">
              <p>© {year} MOUNTAIN LLC. ALL RIGHTS RESERVED.</p>
            </div> 
          </footer>
        </div>
      </div>
    );
};

export default Footer;