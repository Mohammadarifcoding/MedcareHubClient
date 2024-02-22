import React, { useEffect, useState } from 'react';
import UseAuth from '../../../../Hook/UseAuth.tsx';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { base_URL } from '../../../../utills/BaseURL.ts';

const image_hosting_key = '140f2d0db1502e65c2c0ee7bfc66be98';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Profile = () => {
    const { user } = UseAuth();
    const [userData, setUserData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [refetchData, setRefecthData] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        fetch(`${base_URL}/Users?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setUserData(data))
            .catch((error) => console.error('Fetch error:', error));
    }, [user, refetchData]);

    const handleUpdate = async (data) => {
        console.log(data);

        let imageUrl = data.photoURL;

        if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);

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
        }

        const formData = {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            age: data.age,
            address: data.address,
            gender: data.gender,
            imageURL: imageUrl
        };
        console.log(formData);

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

                    <div className="flex flex-col md:flex-row justify-between">
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
                                    <div className="py-3 justify-center flex">
                                        <label htmlFor="file" className="custum-file-upload">
                                            <div className="icon">
                                                <svg viewBox="0 0 24 24" fill xmlns="http://www.w3.org/2000/svg">
                                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                                    <g id="SVGRepo_iconCarrier">
                                                        {' '}
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                                                            fill
                                                        />{' '}
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="text">
                                                {selectedFile === null ? (
                                                    <span>Click to Change Profile image</span>
                                                ) : (
                                                    <span className=" bg-[#0360D9] px-3 rounded-full">You have selected an image</span>
                                                )}
                                            </div>
                                            <input id="file" type="file" onChange={handleFileChange} />
                                        </label>
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
