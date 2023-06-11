import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyAccount = () => {
    const [user] = useAuthState(auth);

    const adminEmail = "ariyanislam666@gmail.com";
    const userEmail = user?.email;

    let admin;
    if(userEmail === adminEmail){
      admin = true;
    }else{
      admin = false;
    };
    return (
        <div className='bg-base-100 my-5 text-left p-5 rounded-sm'>
            <p className='text-neutral font-semibold'>
            {
                admin ? 'Admin Account'
                :
                'My Account'
            }
            </p>
            <div>
                <span>Email</span>
                <p>{user.email}</p>
            </div>
        </div>
    );
};

export default MyAccount;