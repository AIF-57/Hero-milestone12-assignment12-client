import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const NewProduct = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='bg-base-100 my-5 text-left p-5 rounded-sm'>
            <p className='text-neutral font-semibold'>Add Product</p>
            <section className='productForm my-5'>
                <form onSubmit={handleSubmit(onSubmit)}>




                    <input type="email" readOnly value={user?.email} {
                        ...register('userEmail')
                    } className="input input-bordered w-full" />
                  
                    <label className="label">
                        <span className="label-text-alt font-semibold">Product Model</span>
                    </label>
                    <input type="text" placeholder="Model" {...register("model",{
                        required:{
                            value:true,
                            message:'must be filled'
                        }
                    })} className="input input-bordered w-full" />
                    <label className="label">
                        {errors.model?.type === 'required' && <span className="label-text-alt text-primary">{errors.model.message}</span>}
                    </label>


                    <label className="label">
                        <span className="label-text-alt font-semibold">Product Model ID</span>
                    </label>
                    <input type="text" placeholder="Model ID" {...register("modelId",{
                        required:{
                            value:true,
                            message:'must be filled'
                        }
                    })} className="input input-bordered w-full" />
                    <label className="label">
                        {errors.modelId?.type === 'required' && <span className="label-text-alt text-primary">{errors.modelId.message}</span>}
                    </label>


                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24 w-full" placeholder="Bio" {
                        ...register('description',{
                            required:{
                                value:true,
                                message:'must be filled'
                            }
                        })
                    }></textarea>
                    <label className="label">
                        {errors?.description.type === 'required' && <span className="label-text-alt text-primary">{errors.description.message}</span>}
                    </label>
                    
                    <input type="submit" />
                </form>

            </section>
        </div>
    );
};

export default NewProduct;