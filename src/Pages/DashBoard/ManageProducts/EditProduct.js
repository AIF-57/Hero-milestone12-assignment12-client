import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from 'react-hook-form';
import Navbar from '../../Shared/Navbar';
import Footer from '../../Shared/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';
import PrimaryButton from '../../Shared/PrimaryButton';

const EditProduct = () => {
    const {id} = useParams();

    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const userEmail = user?.email;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const url = `http://localhost:5000/product/edit-product/${id}`
    const { isLoading, error, data:product } = useQuery('product', () =>
        fetch(url).then(res =>
        res.json()
        )
    )

    if (isLoading) return <Loading></Loading>
      
    if (error) return 'An error has occurred: ' + error.message;

    const product_Id = product._id;

    const onSubmit = data => {        

        const imgStorageKey = "a773558fb8dee1df002efb83e904284c";

        const selectedImg = data.product_img[0];
        // console.log(selectedImg);

        if(selectedImg === undefined){
            data.Image = product.Image;
            const productSpecObj = JSON.parse(data.SPECIFICATIONS);
            data.SPECIFICATIONS = productSpecObj;
            
            const productFeaturesStr = data.FEATURES;
            const productFeaturesArr = productFeaturesStr.split(",");
            data.FEATURES = productFeaturesArr;
    



            const url = `http://localhost:5000/product/edit-product/${product_Id}`
            axios.put(url,
            data)
            .then(function (response) {
                if(response.data.acknowledged){
                    toast.success("Product details updated successfully.");
                    navigate('/dashboard');
                };
                console.log(response)
              })
              .catch(function (error) {
                toast.error(error);
              });        
        }else{
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

                    const productSpecObj = JSON.parse(data.SPECIFICATIONS);
                    data.SPECIFICATIONS = productSpecObj;
                    
                    const productFeaturesStr = data.FEATURES;
                    const productFeaturesArr = productFeaturesStr.split(",");
                    data.FEATURES = productFeaturesArr;
                    
                    data.Image = productImgURL;


                    const url = `http://localhost:5000/product/edit-product/${product_Id}`
                    axios.put(url,
                    data)
                    .then(function (response) {
                        if(response.data.acknowledged){
                            toast.success("Product details updated successfully.");
                            navigate('/dashboard');
                        };
                        console.log(response)
                      })
                      .catch(function (error) {
                        // toast.error(error);
                        console.log(error)
                      });        

                }
            });
        };

    };

    return (
        <div>
            <div className='bg-base-100 my-5 text-left p-5 rounded-sm'>
                <p className='text-neutral font-semibold'>Revise Product</p>
                <section className='productForm my-5'>



                    <form onSubmit={handleSubmit(onSubmit)}>

                        <section className='flex gap-10 items-center'>
                            
                            <section className='w-1/3'>
                                <img src={product.Image} alt="" width="300"/>
                            </section>
    

                            <section className=''>
                                <label className="label">
                                    <span className="label-text-alt font-semibold">Change Image</span>
                                </label>
                                <input type="file" {...register("product_img")} className="input input-bordered w-full" />

                            </section>

                        </section>

                        <input type="email" defaultValue={userEmail} {
                            ...register('userEmail')
                        } className="input input-bordered w-full hidden" />
                    


                        <label className="label">
                            <span className="label-text-alt font-semibold">Product Model</span>
                        </label>
                        <input type="text" placeholder="Model" defaultValue={product.Model} {...register("Model",{
                            required:{
                                value:true,
                                message:'must be filled'
                            }
                        })} className="input input-bordered w-full" />
                        <label className="label">
                            {errors.Model?.type === 'required' && <span className="label-text-alt text-primary">{errors.Model.message}</span>}
                        </label>


                        <section className='flex gap-10 items-center'>

                            <div className='modelId w-1/2'>
                                <label className="label">
                                    <span className="label-text-alt font-semibold">Product Model ID</span>
                                </label>
                                <input type="text" placeholder="Model ID" defaultValue={product.MODEL_ID} {...register("MODEL_ID",{
                                    required:{
                                        value:true,
                                        message:'must be filled'
                                    }
                                })} className="input input-bordered w-full" />
                                <label className="label">
                                    {errors.MODEL_ID?.type === 'required' && <span className="label-text-alt text-primary">{errors.MODEL_ID.message}</span>}
                                </label>

                            </div>


                            <div className='category w-1/2'>
                                <label className="label">
                                    <span className="label-text-alt font-semibold">Product Category</span>
                                </label>
                                <input type="text" placeholder="Category" defaultValue={product.Category} {...register("Category",{
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
                            <span className="label-text">Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-40 w-full" defaultValue={product.DESCRIPTION} placeholder="Description" {
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
                        <textarea className="textarea textarea-bordered h-40 w-full" defaultValue={product.FEATURES} placeholder="Features" {
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
                        <textarea className="textarea textarea-bordered h-40 w-full" defaultValue={JSON.stringify(product.SPECIFICATIONS)} placeholder="Specifications" {
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
                        <input type="text" defaultValue={product.MSRP} placeholder="Product MSRP" {...register("MSRP",{
                            required:{
                                value:true,
                                message:'must be filled'
                            }
                        })} className="input input-bordered w-full" />
                        <label className="label">
                            {errors.MSRP?.type === 'required' && <span className="label-text-alt text-primary">{errors.MSRP.message}</span>}
                        </label>
                        
                        <PrimaryButton type='submit'>Revise Product</PrimaryButton>
                    </form>

                </section>
            </div>
            
        </div>
    );
};

export default EditProduct;