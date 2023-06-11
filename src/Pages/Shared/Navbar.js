import { faGripHorizontal, faRightFromBracket, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const [signOut] = useSignOut(auth);


    const userImg = user?.photoURL;
    
    const adminEmail = "ariyanislam666@gmail.com";
    const userEmail = user?.email;

    let admin;
    if(userEmail === adminEmail){
      admin = true;
    }else{
      admin = false;
    };


    return (
        <div>
        <div className="navbar mx-auto bg-base-100 border-b">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Item 1</a></li>
              <li tabIndex={0}>
                <a>
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-2xl italic font-extrabold text-primary">Mountain</Link>
        <div className="navbar-end px-2">

        {
          user?
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn m-1 bg-base-100 border-none hover:bg-base-100">
              <div className="avatar">
                {(loading) && <button className="btn btn-square loading bg-base-100 text-primary w-full border-none"></button>}
                <div className="w-10 rounded-full">
                  {
                    userImg?
                    <img src={userImg} alt='user'/>
                    :
                    <span className='text-secondary text-4xl'><FontAwesomeIcon icon={faUserAlt}/></span>
                  }
                </div>
            </div>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 bg-base-100 rounded-sm w-80 font-semibold shadow-2xl">
              <li><Link to={'/dashboard'}><span className='bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center'><FontAwesomeIcon icon={faGripHorizontal} className='text-secondary'></FontAwesomeIcon></span>Dashboard</Link></li>
              <li><button onClick={()=>{signOut()}} className='flex'><span className='bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center'><FontAwesomeIcon icon={faRightFromBracket} className='text-secondary'></FontAwesomeIcon></span><p>Logout</p></button></li>
      
            </ul>
          </div>

          :
          <Link to='/login' className="btn btn-sm rounded-sm border-none text-base-100">Login</Link>
        }
        
        </div>
      </div>
        </div>
    );
};

export default Navbar; 