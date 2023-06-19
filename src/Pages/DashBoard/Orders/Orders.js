import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Order from './Order';

const Orders = () => {
    const [user] = useAuthState(auth);

    const userEmailOrName = user?.email || user?.displayName;

    const url = `http://localhost:5000/user-orders/${userEmailOrName}` 
    const { isLoading, error, data:orders} = useQuery('orders', () =>
        fetch(url).then(res =>
        res.json()
        )
    );

    if (isLoading) return <Loading/>

    if (error) return 'An error has occurred: ' + error.message



    return (
        <div>
            <div className="pageHeading py-10">
                {
                (orders.length) ? 
                <p className='text-2xl font-bold'>My Orders ({orders?.length} item)</p>
                :
                <p className='text-2xl font-bold'>Your has no completed order</p>
                }
            </div>

            {
                orders.map(o => <Order 
                    key={o._id}            
                    detail={o}></Order>)
            }

        </div>
    );
};

export default Orders;