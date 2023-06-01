import React from 'react';

const DeleteProductModal = ({handleDeleteProduct}) => {
    return (
        <div>
            <input type="checkbox" id="deleteProduct-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h3 className="text-lg font-bold">Admin do you want to delete this product?</h3>
                    <div className="modal-action">
                        <label htmlFor="deleteProduct-modal" className="btn" onClick={()=>handleDeleteProduct('cancel')}>Cancel</label>
                        <label htmlFor="deleteProduct-modal" className="btn" onClick={()=>handleDeleteProduct('delete')}>Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProductModal;