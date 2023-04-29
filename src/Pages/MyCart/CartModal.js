import React from 'react';

const CartModal = ({handleDeleteItemFromCart}) => {
    return (
        <div>
            <input type="checkbox" id="cart-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h3 className="text-lg font-bold">Do you want to remove this item?</h3>
                    <div className="modal-action">
                        <label htmlFor="cart-modal" className="btn" onClick={()=>handleDeleteItemFromCart('cancel')}>Cancel</label>
                        <label htmlFor="cart-modal" className="btn" onClick={()=>handleDeleteItemFromCart('remove')}>Remove</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;