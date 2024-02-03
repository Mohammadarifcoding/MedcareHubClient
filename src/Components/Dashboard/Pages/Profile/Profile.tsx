import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2';
import UseAuth from '../../../../Hook/UseAuth.tsx';
import { base_URL } from '../../../../utills/BaseURL.ts';



const Profile = () => {
    const { user } = UseAuth();
    const [userData, setUserData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [refetchData, setRefecthData] = useState(false);

    // Determine the status based on the type of user
    const status = user?.role === 'doctor' ? 'Doctor' : user?.role === 'patient' ? 'Patient' : user?.role === 'company' ? 'Company User' : 'Unknown';

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    useEffect(() => {
        fetch(`${base_URL}/Users?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setUserData(data));
    }, [user, refetchData]);

    const handleUpdate = async (data) => {
        console.log(data);
        const formData = {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            age: data.age,
            address: data.address,
            gender: data.gender,
            imageURL: data.photoURL
        };
        console.log(data.id);

        await axios
            .put(`${base_URL}/User/${data.id}`, formData)
            .then((res) => {
                console.log(res);

                Swal.fire('Updated Your Profile!');
                setOpenModal(false);
                setRefecthData(!refetchData);
            })
            .catch((error) => console.error('Error updating status:', error));
    };

    // console.log(userData.data);
    return (
        <>
            {userData?.data?.map((users) => (
                <div key={users._id} className="divide-y max-w-2xl mx-auto divide-gray-200">
                    <div className="py-4">
                        <h2 className="mb-2 lg:text-3xl text-lg my-5 text-center font-semibold">Profile Information</h2>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <span className="relative mt-5 flex h-48 w-48 shrink-0 overflow-hidden rounded-full">
                                    <img className="aspect-square h-full w-full" alt="" src={users?.imageURL} />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="py-4">
                        <h2 className="mb-2 text-lg font-semibold">Username</h2>
                        <div className="flex justify-between">
                            <span>{users?.name}</span>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="py-4">
                            <h2 className="mb-2 text-lg font-semibold">Phone Number</h2>
                            <div className="flex justify-between">
                                <span>{users?.phoneNumber}</span>
                            </div>
                        </div>

                        <div className="py-4">
                            <h2 className="mb-2 text-lg font-semibold">Email Address</h2>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span>{users?.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-4">
                        <h2 className="mb-2 text-lg font-semibold">Age</h2>
                        <div className="flex justify-between">
                            <span>{users?.age}</span>
                            
                        </div>
                    </div>
                    <div className="py-4">
                        <h2 className="mb-2 text-lg font-semibold">Gender</h2>
                        <div className="flex justify-between">
                            <span>{users?.gender}</span>
                        </div>
                    </div>
                    <div className="py-4">
                        <h2 className="mb-2 text-lg font-semibold">Address</h2>
                        <div className="flex justify-between">
                            <span>{users?.address}</span>
                        </div>
                    </div>


                    <div className="w-72 mx-auto flex items-center justify-center">
                        <button onClick={() => setOpenModal(true)} className="bg-blue-600 text-white p-2 rounded-lg">
                            Update Profile
                        </button>
                        <div
                            onClick={() => setOpenModal(false)}
                            className={`fixed flex justify-center items-center z-[100] ${
                                openModal ? 'visible opacity-1' : 'invisible opacity-0'
                            } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
                        >
                            <div
                                onClick={(e_) => e_.stopPropagation()}
                                className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${
                                    openModal ? 'opacity-1 duration-300 translate-y-0' : '-translate-y-20 opacity-0 duration-150'
                                }`}
                            >
                                <form onSubmit={handleSubmit(handleUpdate)} className="p-12">
                                    <svg onClick={() => setOpenModal(false)} className="w-10 mx-auto mr-0 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                                                fill="#000000"
                                            ></path>
                                        </g>
                                    </svg>

                                    <input type="text" className="hidden" {...register('id')} defaultValue={users?._id} id="" />

                                    <h1 className="backdrop-blur-sm text-4xl pb-8">Update Your Profile</h1>
                                    <div className="space-y-5">
                                        <label className="block text-sm font-medium text-gray-700">User Name</label>
                                        <input
                                            type="text"
                                            {...register('name')}
                                            className="p-3 block w-full drop-shadow-lg rounded-lg outline-none text-sm"
                                            placeholder="User name"
                                            defaultValue={users?.name}
                                        />

                                        <label className="block text-sm font-medium text-gray-700">User Email</label>
                                        <input
                                            type="email"
                                            {...register('email')}
                                            className="p-3 block w-full drop-shadow-lg rounded-lg outline-none text-sm"
                                            placeholder="User email"
                                            readOnly
                                            defaultValue={users?.email}
                                        />

                                        <label className="block text-sm font-medium text-gray-700">User Photo URL</label>
                                        <input
                                            type="text"
                                            {...register('photoURL')}
                                            className="p-3 block w-full drop-shadow-lg rounded-lg outline-none text-sm"
                                            placeholder="User PhotoURL"
                                            defaultValue={users?.imageURL}
                                        />

                                        <div className="lg:flex gap-3">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                                <input
                                                    type="text"
                                                    {...register('phoneNumber')}
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                    placeholder="User Phone Number"
                                                    defaultValue={users?.phoneNumber}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Age</label>
                                                <input
                                                    type="text"
                                                    {...register('age')}
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                    placeholder="User age"
                                                    defaultValue={users?.age}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Gender</label>
                                                <input
                                                    type="text"
                                                    {...register('gender')}
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                    placeholder="User gender"
                                                    defaultValue={users?.gender}
                                                />
                                            </div>
                                        </div>

                                        <label className="block text-sm font-medium text-gray-700">Address</label>
                                        <input
                                            type="text"
                                            {...register('address')}
                                            className="p-3 block w-full drop-shadow-lg rounded-lg outline-none text-sm"
                                            placeholder="User address"
                                            defaultValue={users?.address}
                                        />
                                    </div>

                                    <div>
                                        <button className="btn bg-[#0360D9] mt-5 text-white w-full" type="submit">
                                            {' '}
                                            Update Profile
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Profile;