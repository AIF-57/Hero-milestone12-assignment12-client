import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const NewProduct = () => {
    const [user] = useAuthState(auth)
    const userEmail = user?.email;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const productDetails = JSON.parse(data.SPECIFICATIONS)
        axios.post('http://localhost:5000/product',{
            data
        })
        .then(
        ) 
        console.log(productDetails)
    };
    return (
        <div className='bg-base-100 my-5 text-left p-5 rounded-sm'>
            <p className='text-neutral font-semibold'>Add Product</p>
            <section className='productForm my-5'>
                <form onSubmit={handleSubmit(onSubmit)}>




                    <input type="email" defaultValue={userEmail} {
                        ...register('userEmail')
                    } className="input input-bordered w-full hidden" />
                  
                    <label className="label">
                        <span className="label-text-alt font-semibold">Product Model</span>
                    </label>
                    <input type="text" placeholder="Model" {...register("Model",{
                        required:{
                            value:true,
                            message:'must be filled'
                        }
                    })} className="input input-bordered w-full" />
                    <label className="label">
                        {errors.Model?.type === 'required' && <span className="label-text-alt text-primary">{errors.Model.message}</span>}
                    </label>


                    <label className="label">
                        <span className="label-text-alt font-semibold">Product Model ID</span>
                    </label>
                    <input type="text" placeholder="Model ID" {...register("MODEL_ID",{
                        required:{
                            value:true,
                            message:'must be filled'
                        }
                    })} className="input input-bordered w-full" />
                    <label className="label">
                        {errors.MODEL_ID?.type === 'required' && <span className="label-text-alt text-primary">{errors.MODEL_ID.message}</span>}
                    </label>



                    <section className='productCategory flex items-center'>
                        <div className='selectCategory w-1/2'>
                            <label className="label">
                                <span className="label-text-alt font-semibold">Product Category</span>
                            </label>
                            <select className="select select-bordered w-[95%]" {...register("Category",{
                                required:{
                                    value:true,
                                    message:'select a category'
                                }
                            })}>
                                <option defaultValue={this}>Select Category</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Custom Category</option>
                            </select>
                            <label className="label">
                                {errors.Category?.type === 'required' && <span className="label-text-alt text-primary">{errors.Category.message}</span>}
                            </label>

                        </div>
                        <div className="customCategory w-1/2">
                            <input type="text" placeholder="Custom Category" {...register("customCategory",{
                                required:{
                                    value:false,
                                    message:'must be filled'
                                }
                            })} className="input input-bordered w-full mt-4" />
    
                        </div>
                    </section>



                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24 w-full" placeholder="Description" {
                        ...register('DESCRIPTION',{
                            required:{
                                value:true,
                                message:'must be filled'
                            }
                        })
                    }></textarea>
                    <label className="label">
                        {errors.DESCRIPTION?.type === 'required' && <span className="label-text-alt text-primary">{errors.DESCRIPTION.message}</span>}
                    </label>


                    <label className="label">
                        <span className="label-text">Features</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24 w-full" placeholder="Features" {
                        ...register('FEATURES',{
                            required:{
                                value:true,
                                message:'must be filled'
                            }
                        })
                    }></textarea>
                    <label className="label">
                        {errors.FEATURES?.type === 'required' && <span className="label-text-alt text-primary">{errors.FEATURES.message}</span>}
                    </label>


                    <label className="label">
                        <span className="label-text">Specifications</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24 w-full" placeholder="Specifications" {
                        ...register('SPECIFICATIONS',{
                            required:{
                                value:true,
                                message:'must be filled'
                            }
                        })
                    }></textarea>
                    <label className="label">
                        {errors.SPECIFICATIONS?.type === 'required' && <span className="label-text-alt text-primary">{errors.SPECIFICATIONS.message}</span>}
                    </label>
                    

                    <label className="label">
                        <span className="label-text-alt font-semibold">Product MSRP</span>
                    </label>
                    <input type="text" placeholder="Product MSRP" {...register("MSRP",{
                        required:{
                            value:true,
                            message:'must be filled'
                        }
                    })} className="input input-bordered w-full" />
                    <label className="label">
                        {errors.MSRP?.type === 'required' && <span className="label-text-alt text-primary">{errors.MSRP.message}</span>}
                    </label>
                    
                    <input type="submit" />
                </form>

            </section>
        </div>
    );
};

export default NewProduct;