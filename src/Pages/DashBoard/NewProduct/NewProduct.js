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

    const imgStorageKey = "a773558fb8dee1df002efb83e904284c";
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const productQuantity = isNaN(parseFloat(data.AVAILABILITY));


        const selectedImg = data.product_img[0];
        const formData = new FormData();
        formData.append('image',selectedImg)
        const imageStorageURL = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(imageStorageURL,{
            method:"POST",
            body: formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                const productImgURL = result.data.url;

                if(!productQuantity){
                    data.Status = 'Available';
                };

                const productSpecObj = JSON.parse(data.SPECIFICATIONS);
                data.SPECIFICATIONS = productSpecObj;

                const productFeaturesStr = data.FEATURES;
                const productFeaturesArr = productFeaturesStr.split(",");
                data.FEATURES = productFeaturesArr;

                data.Image = productImgURL;


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
        })
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




                    <section className='flex flex-col md:flex-row md:gap-10 items-center'>

                        <div className='modelId w-full md:w-1/2'>
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

                        </div>


                        <div className='selectCategory w-full md:w-1/2'>
                            <label className="label">
                                <span className="label-text-alt font-semibold">Product Category</span>
                            </label>
                            <input type="text" placeholder="Category" {...register("Category",{
                                required:{
                                    value:true,
                                    message:'must be filled'
                                }
                            })} className="input input-bordered w-full" />
                            <label className="label">
                                {errors.Category?.type === 'required' && <span className="label-text-alt text-primary">{errors.Category.message}</span>}
                            </label>

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
                    
                    

                    <section className='flex flex-col md:flex-row justify-between gap-10'>

                        <div className='w-full md:w-1/2'>
                            <label className="label">
                                <span className="label-text-alt font-semibold">Product Image</span>
                            </label>
                            <input type="file" {...register("product_img",{
                                required:{
                                    value:true,
                                    message:'upload an image'
                                }
                            })} className="input input-bordered w-full" />
                            <label className="label">
                                {errors.product_img?.type === 'required' && <span className="label-text-alt text-primary">{errors.product_img.message}</span>}
                            </label>

                        </div>



                        <div className='AVAILABILITY w-full md:w-1/3'>
                            <label className="label">
                                <span className="label-text-alt font-semibold">Product Availability</span>
                            </label>
                            <input type="text" placeholder="Product Availability" {...register("AVAILABILITY",{
                                required:{
                                    value:true,
                                    message:'must be filled'
                                }
                            })} className="input input-bordered w-full" />
                            <label className="label">
                                {errors.AVAILABILITY?.type === 'required' && <span className="label-text-alt text-primary">{errors.AVAILABILITY.message}</span>}
                            </label>
                        </div>


                        <div className='Minimum_order_unit w-full md:w-1/3'>
                            <label className="label">
                                <span className="label-text-alt font-semibold">Minimum order unit</span>
                            </label>
                            <input type="text" placeholder="Minimum order unit" {...register("Minimum_order_unit",{
                                required:{
                                    value:true,
                                    message:'must be filled'
                                }
                            })} className="input input-bordered w-full" />
                            <label className="label">
                                {errors.Minimum_order_unit?.type === 'required' && <span className="label-text-alt text-primary">{errors.Minimum_order_unit.message}</span>}
                            </label>
                        </div>



                        <div className='MSRP w-full md:w-1/3'>
                            <label className="label">
                                <span className="label-text-alt font-semibold">Product MSRP</span>
                            </label>
                            <input type="text" defaultValue='$' placeholder="Product MSRP" {...register("MSRP",{
                                required:{
                                    value:true,
                                    message:'must be filled'
                                }
                            })} className="input input-bordered w-full" />
                            <label className="label">
                                {errors.MSRP?.type === 'required' && <span className="label-text-alt text-primary">{errors.MSRP.message}</span>}
                            </label>
                        </div>
                    
                    </section>

                    <PrimaryButton type='submit' className='text-2xl'>NEW PRODUCT</PrimaryButton>
                </form>

            </section>
        </div>
    );
};

export default NewProduct;