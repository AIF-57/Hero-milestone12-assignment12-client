import React, { useState } from 'react';
import auth from '../../firebase.init';
import form_bg from '../../utilities/images/formBG.jpg'
import google from '../../utilities/images/Google-logo.png'
import facebook from '../../utilities/images/facebook-logo.jpg'
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faLock, faPaperPlane } from '@fortawesome/free-solid-svg-icons';




const Login = () => {
        const { register, handleSubmit, formState: { errors } } = useForm();
        const onSubmit = data => {
          signInWithEmailAndPassword(data.email,data.password)
          console.log(data)
        };


        const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
        const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);
        const [signInWithEmailAndPassword, user,  loading,  error,] = useSignInWithEmailAndPassword(auth);

    return (
        <div className='h-screen flex flex-col justify-center' 
            style={{background:`url(${form_bg})`,backgroundSize:'cover', backgroundPosition:'center'}}
        >
            <div className="loginArea w-[320px] mx-auto shadow-xl">
                <div className="logo bg-[#cccccc] h-32 flex items-center justify-center rounded-t-md">
                    <p className="text-xl italic font-extrabold text-base-100 bg-primary inline-block p-4">Mountain</p>
                </div>
                <div className="bg-base-100 pt-8 rounded-b-md">
                    <button onClick={()=>signInWithGoogle()} className="btn w-[90%] bg-transparent border-gray-300 rounded-md hover:bg-gray-100 hover:border-gray-300 text-accent justify-start capitalize min-h-[2.6rem] h-[2.6rem]">
                    <img src={google} alt="" width={22} className='mr-8'/>
                    <p>Sign in with Google</p>
                    </button>
                    {
                      (gError && <span className='text-red-600 text-xs font-semibold'>{gError?.message}</span>)
                    }

                    <button onClick={()=>signInWithFacebook()} className="btn w-[90%] bg-[#3b5998] border-none rounded-md hover:bg-[#2f477a] hover:border-gray-300 text-base-100 justify-start capitalize mt-4 mb-5 min-h-[2.6rem] h-[2.6rem]">
                    <img src={facebook} alt="" width={22} className='mr-8'/>
                    <p>Sign in with Facebook</p>
                    </button>
                    {
                      (fError && <span className='text-red-600 text-xs font-semibold'>{fError?.message}</span>)
                    }


                    <div className="flex flex-col w-full border-opacity-50 mb-5">
                      <div className="text-sm text-gray-400">or</div>
                    </div>


                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-control w-[90%] mx-auto max-w-xs">
                        <div className="inputField flex items-center border rounded-md">
                          <span className='w-10 border-r-2'><FontAwesomeIcon icon={faPaperPlane}/></span>
                          <input type="email" placeholder="your@email.com" className="input input-bordered w-full max-w-xs min-h-[2.6rem] h-[2.6rem] border-none focus:outline-none" 
                          {...register("email", {
                            required:{
                              value:true,
                              message:'You must provide the email'
                            }, 
                            pattern:{
                              value:/([a-zA_Z0-9_.+-])@[a-zA_Z0-9_.+-]+\.[a-zA_Z0-9_.+-]/,
                              message:'Invalid email address'
                            } 
                          })} 
                          />
                        </div>
                        <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600 font-semibold">{errors.email.message}</span>}
                        </label>


                        <div className="inputField flex items-center border rounded-md">
                          <span className='w-10 border-r-2'><FontAwesomeIcon icon={faLock}/></span>
                          <input type="password" placeholder="your password" className="input input-bordered w-full max-w-xs min-h-[2.6rem] h-[2.6rem] border-none focus:outline-none" 
                          {...register("password", {
                            required:{
                              value:true,
                              message:'You must provide the password'
                            }, 
                            minLength:{
                              value:6,
                              message:'Password must be 6 characters or above'
                            } 
                          })} 
                          />
                        </div>
                        <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600 font-semibold">{errors.password.message}</span>}
                        </label>

                      </div>                      
                      <input />
                      {(error) && <span className='text-red-600 text-xs font-semibold w-full inline-block mb-2'>{error?.message}</span>}
                      <button type="submit" className='btn w-full rounded-b-md rounded-t-none h-20 text-base-100'>LOGIN <span className='ml-2'><FontAwesomeIcon icon={faAngleRight}/></span></button>
                    </form>



                    
                </div>
            </div>   

        </div>
    );
};

export default Login;