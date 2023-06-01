import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import { useQuery } from 'react-query';
import PrimaryButton from '../../Shared/PrimaryButton'
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';

const NewProduct = () => {
    const [user] = useAuthState(auth)
    const userEmail = user?.email;


    const url = `http://localhost:5000/product/categories`
    const { data } = useQuery('product', () =>
        fetch(url).then(res =>
        res.json()
        )
    );


    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const productSpecObj = JSON.parse(data.SPECIFICATIONS);
        data.SPECIFICATIONS = productSpecObj;

        const productFeaturesStr = data.FEATURES;
        const productFeaturesArr = productFeaturesStr.split(",");
        data.FEATURES = productFeaturesArr;

        
        axios.post('http://localhost:5000/new_product',
            data)
            .then(function (response) {
                if(response.data.insertedId){
                    toast.success("New Product added successfully.");
                    navigate('/dashboard');
                };
              })
              .catch(function (error) {
                toast.error(error);
              });
    }
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
                                {data?.map(c => <option>{c.Category}</option>)};
                                <option>Custom Category</option>

                            </select>
                            <label className="label">
                                {errors.Category?.type === 'required' && <span className="label-text-alt text-primary">{errors.Category.message}</span>}
                            </label>

                        </div>
                        <div className="customCategory w-1/2">
                            <input type="text" placeholder="Custom Category" disabled {...register("customCategory",{
                                required:{
                                    value:false,
                                    message:'must be filled'
                                }
                            })} className="input input-bordered w-full mt-4" />
    
                        </div>
                    </section>



                    <label className="label">
                        <span className="label-text font-semibold">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-40 w-full" placeholder="Description" {
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
                        <span className="label-text font-semibold">Features <span className='font-normal'>use commas for several sentences</span></span>
                    </label>
                    <textarea className="textarea textarea-bordered h-40 w-full" placeholder="Features" {
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
                        <span className="label-text font-semibold">Specifications <span className='font-normal'>{`[Ex- {"Color":"Red","Type":"Mechanical",}]`}</span></span>
                    </label>
                    <textarea className="textarea textarea-bordered h-40 w-full" placeholder="Specifications" {
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
                    
                    <section>
                    <label className="label">
                        <span className="label-text-alt font-semibold">Product MSRP</span>
                    </label>
                    <input type="text" defaultValue="$" placeholder="Product MSRP" {...register("MSRP",{
                        required:{
                            value:true,
                            message:'must be filled'
                        }
                    })} className="input input-bordered w-full" />
                    <label className="label">
                        {errors.MSRP?.type === 'required' && <span className="label-text-alt text-primary">{errors.MSRP.message}</span>}
                    </label>
                    
                    <PrimaryButton type='submit' className='text-2xl'>NEW PRODUCT</PrimaryButton>
 
                    </section>
                </form>

            </section>
        </div>
    );
};

export default NewProduct;