import React, { useEffect } from 'react';
import UseAuth from '../../../../Hook/UseAuth.tsx';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { base_URL } from '../../../../utills/BaseURL.ts';



const Profile = () => {
    const { user } = UseAuth()

    // Determine the status based on the type of user
    const status = user?.role === 'doctor' ? 'Doctor' :
        user?.role === 'patient' ? 'Patient' :
            user?.role === 'company' ? 'Company User' :
                'Unknown';


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    useEffect(() => {
        fetch(`${base_URL}/Users?email=${user?.email}`)
            .then(res => res.json())
            .then(data=>console.log(data))

    }, [user])

    const onSubmit = async (data) => {
        console.log(data);
        const formData = {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            age: data.age,
            address: data.address,
            gender: data.gender,
            imageURL: data.imageURL
        }
        await axios.put(`${base_URL}/User/${data.id}`, formData)
            .then((res) => {
                console.log(res);

                Swal.fire("Updated Your Profile!")

            })
            .catch((error) => console.error("Error updating status:", error))


    }


    return (
        <>
            {
                status === "Unknown" &&
                (
                    <div className="divide-y max-w-2xl mx-auto divide-gray-200">
                        <div className="py-4">
                            <h2 className="mb-2 lg:text-3xl text-lg my-5 text-center font-semibold">Profile Information</h2>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <span className="relative mt-5 flex h-48 w-48 shrink-0 overflow-hidden rounded-full">
                                        <img
                                            className="aspect-square h-full w-full"
                                            alt=""
                                            src={user?.photoURL}
                                        />
                                    </span>

                                </div>
                            </div>
                        </div>
                        <div className="py-4">
                            <h2 className="mb-2 text-lg font-semibold">Status</h2>
                            <div className="flex justify-between">
                                <span>{status}</span>

                            </div>
                        </div>

                        <div className="py-4">
                            <h2 className="mb-2 text-lg font-semibold">Username</h2>
                            <div className="flex justify-between">
                                <span>{user?.displayName}</span>

                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className="py-4">
                                <h2 className="mb-2 text-lg font-semibold">Phone Number</h2>
                                <div className="flex justify-between">
                                    <span>{user?.phoneNumber}</span>

                                </div>
                            </div>

                            <div className="py-4">
                                <h2 className="mb-2 text-lg font-semibold">Email Address</h2>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span>{user?.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="py-4">
                            <h2 className="mb-2 text-lg font-semibold">Age</h2>
                            <div className="flex justify-between">
                                <span>{user?.age}</span>

                            </div>
                        </div>
                        <div className="py-4">
                            <h2 className="mb-2 text-lg font-semibold">Gender</h2>
                            <div className="flex justify-between">
                                <span>{user?.gender}</span>

                            </div>
                        </div>
                        <div className="py-4">
                            <h2 className="mb-2 text-lg font-semibold">Address</h2>
                            <div className="flex justify-between">
                                <span>{user?.address}</span>

                            </div>
                        </div>


                        <button className="block text-white bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => document.getElementById('my_modal_1').showModal()}> Update Profile</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            User Name
                                        </label>
                                        <input
                                            type="text"
                                            {...register("name", { required: true, minLength: 6 })}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                            placeholder="User name" defaultValue={user?.displayName}

                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            User Email
                                        </label>
                                        <input type="email" {...register("email", { required: true })}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                            placeholder="User email" defaultValue={user?.email}


                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            User Photo URL
                                        </label>
                                        <input type="text"
                                            {...register("photoURL", { required: true })}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                            placeholder="User PhotoURL"

                                        />
                                    </div>

                                    <div className='lg:flex gap-3'>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Phone Number
                                            </label>
                                            <input type="email" {...register("phoneNumber", { required: true })}
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                placeholder="User Phone Number"


                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Age
                                            </label>
                                            <input type="email" {...register("age", { required: true })}
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                placeholder="User age"


                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Address
                                        </label>
                                        <input type="email" {...register("address", { required: true })}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                            placeholder="User address"


                                        />
                                    </div>


                                    <div className="modal-action">
                                        <form method="dialog">
                                            
                                            <button className="btn bg-[#0360D9] text-white w-full">Updated</button>
                                        </form>
                                    </div>



                                </form>
                            </div>
                        </dialog>



                    </div>
                )
            }
            {/* {
                status === "Company User" &&
                (
                    <div className="divide-y max-w-2xl mx-auto divide-gray-200">
                        <div className="py-4">
                            <h2 className="mb-2 lg:text-3xl text-lg my-5 text-center font-semibold">Profile Information</h2>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <span className="relative mt-5 flex h-48 w-48 shrink-0 overflow-hidden rounded-full">
                                        <img
                                            className="aspect-square h-full w-full"
                                            alt=""
                                            src={user?.photoURL}
                                        />
                                    </span>

                                </div>
                            </div>
                        </div>
                        <div className="py-4">
                            <h2 className="mb-2 text-lg font-semibold">Status</h2>
                            <div className="flex justify-between">
                                <span>{status}</span>

                            </div>
                        </div>
                        <div className="py-4">
                            <h2 className="mb-2 text-lg font-semibold">Username</h2>
                            <div className="flex justify-between">
                                <span>{user?.displayName}</span>

                            </div>
                        </div>
                        <div className="py-4">
                            <h2 className="mb-2 text-lg font-semibold">Email address</h2>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span>{user?.email}</span>
                                    </div>

                                </div>

                                <button className="inline-flex items-center justify-center  rounded-md text-sm font-medium hover:bg-[#0360D9] hover:text-white h-10 px-4 py-2 text-blue-600">
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                status === "Doctor" &&
                (
                    <div className="divide-y max-w-2xl mx-auto divide-gray-200">
                        <div className="py-4">
                            <h2 className="mb-2 lg:text-3xl text-lg my-5 text-center font-semibold">Profile Information</h2>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <span className="relative mt-5 flex h-48 w-48 shrink-0 overflow-hidden rounded-full">
                                        <img
                                            className="aspect-square h-full w-full"
                                            alt=""
                                            src={user?.photoURL}
                                        />
                                    </span>

                                </div>
                            </div>
                        </div>
                        <div className="py-4">
                            <h2 className="mb-2 text-lg font-semibold">Status</h2>
                            <div className="flex justify-between">
                                <span>{status}</span>

                            </div>
                        </div>
                        <div className="py-4">
                            <h2 className="mb-2 text-lg font-semibold">Username</h2>
                            <div className="flex justify-between">
                                <span>{user?.displayName}</span>

                            </div>
                        </div>

                        <div className="py-4">
                            <h2 className="mb-2 text-lg font-semibold">Email Address</h2>
                            <div className="flex justify-between">
                                <span>{user?.email}</span>

                            </div>
                        </div>
                        <div className="py-4">
                            <h2 className="mb-2 text-lg font-semibold">Phone No</h2>
                            <div className="flex justify-between">
                                <span>{user?.phoneno}</span>

                            </div>
                        </div>
                        <div className="py-4">
                            <h2 className="mb-2 text-lg font-semibold">Address</h2>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span>{user?.address}</span>
                                    </div>

                                </div>

                                <button className="inline-flex items-center justify-center  rounded-md text-sm font-medium hover:bg-[#0360D9] hover:text-white h-10 px-4 py-2 text-blue-600">
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </div>
                )
            } */}

        </>
    );
};

export default Profile;