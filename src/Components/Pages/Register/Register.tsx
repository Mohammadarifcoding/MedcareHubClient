import Lottie from 'lottie-react';
import React, { useState } from 'react';
import UseAuth from '../../../Hook/UseAuth.tsx';
import { Link, useNavigate } from 'react-router-dom';
import loginAnimation from './../Login/login.json';
import Swal from 'sweetalert2';

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { base_URL } from '../../../utills/BaseURL.ts';

const image_hosting_key = '140f2d0db1502e65c2c0ee7bfc66be98';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
    const { createUser, updateUser, load, signInWithGoogle } = UseAuth();
    const registerNavi = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = async(data) => {
        console.log(data);

        let imageUrl;

        const formData = new FormData();
        const singleImageFile = data.photoURL[0];
        formData.append('image', singleImageFile);
    
        try {
            const response = await axios.post(image_hosting_api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            imageUrl = response.data.data.url;
        } catch (error) {
            console.error('Error uploading image:', error);
            return;
        }

        createUser(data.email, data.password).then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUser(data.name, imageUrl)
                .then(() => {
                    const userInfo = {
                        name: data.name,
                        email: data.email,
                        imageURL: imageUrl,
                    };
                    axios.post(`${base_URL}/User`, userInfo).then((res) => {
                        console.log(res);
                        if (res.statusText === 'OK') {
                            console.log('user added to the database');
                            reset();
                            Swal.fire({
                                icon: 'success',
                                title: 'Register Successfull',
                                text: 'You have successfully registerd!'
                            });

                            registerNavi('/');
                        }
                    });
                })
                .catch((error) => console.log(error));
        });
    };

    const handleGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email,
                    imageURL: result.user.photoURL
                };
                axios.post(`${base_URL}/User`, userInfo).then((res) => {
                    console.log(res);
                    if (res.statusText === 'OK') {
                        console.log('user added to the database');
                        reset();
                        Swal.fire({
                            icon: 'success',
                            title: 'Register Successful',
                            text: 'You have successfully registered!'
                        });
                        registerNavi('/');
                    }
                });
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <div className="min-h-screen bg-[#EEF2FB] flex items-center justify-center">
                <div className="max-w-4xl w-full mx-auto  lg:p-8 p-2  bg-[#EEF2FB] rounded-lg  flex  items-center overflow-hidden">
                    <div className="w-2/5  p-8 items-center justify-center lg:block hidden">
                        <Lottie animationData={loginAnimation}></Lottie>
                    </div>
                    <div className="lg:w-3/5 md:p-8 p-2">
                        <h1 className="text-2xl font-bold mb-2">MedCareHub</h1>
                        <h2 className="text-xl mb-8">Create a new Account</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">User Name</label>
                                <input
                                    type="text"
                                    {...register('name', { required: true, minLength: 6 })}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    placeholder="User name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">User Email</label>
                                <input
                                    type="email"
                                    {...register('email', { required: true })}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    placeholder="User email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">User Photo URL</label>
                                {/* <input
                                    type="text"
                                    {...register('photoURL', { required: true })}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    placeholder="User PhotoURL"
                                /> */}
                                <input
                                    type="file"
                                    {...register('photoURL', { required: true })}
                                    className="input rounded-r-md  w-full font-medium bg-[#0360D9] p-2 text-white file-input file-input-bordered border-none file-input-info"
                                    accept="image/*"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">New Password</label>
                                <input
                                    {...register('password', { required: true, pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    placeholder="User new password"
                                    type="password"
                                    name="password"
                                />
                                {errors.password?.type === 'required' && <span className="text-red-800">Password is required</span>}
                                {errors.password?.type === 'minlength' && <span className="text-red-800">Password must be 6 character</span>}
                                {errors.password?.type === 'maxlength' && <span className="text-red-800">Password must be less than 20 character</span>}
                                {errors.password?.type === 'pattern' && (
                                    <span className="text-red-800">Password must have at least one upper case,at least one lower case, one number and one special character</span>
                                )}
                            </div>
                            <button className="btn bg-[#0360D9] text-white w-full">Sign up</button>

                            <div className="mt-4 gap-10">
                                <button onClick={handleGoogle} type="button" className="btn bg-[#0360D9] text-white w-full">
                                    <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                        <path
                                            d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                                            fill="#EB4335"
                                        />
                                    </svg>
                                    SignUp with Google
                                </button>
                            </div>
                        </form>

                        <div className="mt-6 flex flex-col space-y-2">
                            <a className="text-sm" href="#">
                                Already have an account? <Link to="/login"> Login here</Link>
                            </a>
                        </div>
                        <p className="mt-6 text-xs text-gray-600">
                            By logging into the Prominent application you are agreeing to the{' '}
                            <a className="text-blue-600" href="#">
                                Terms &amp; Conditions
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
