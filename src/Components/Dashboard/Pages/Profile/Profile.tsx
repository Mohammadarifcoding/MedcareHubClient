import React, { useEffect, useState } from 'react';
import UseAuth from '../../../../Hook/UseAuth.tsx';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { base_URL } from '../../../../utills/BaseURL.ts';



const Profile = () => {
    const { user } = UseAuth()
    const [userData, setUserData] = useState([]);




    // Determine the status based on the type of user
    const status = user?.role === 'doctor' ? 'Doctor' :
        user?.role === 'patient' ? 'Patient' :
            user?.role === 'company' ? 'Company User' :
                'Unknown';


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    useEffect(() => {
        fetch(`${base_URL}/Users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))

    }, [user])



    const handleUpdate = async (data) => {
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
        console.log(data.id);

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
                userData?.data?.map((users) => (

                    <div key={users._id} className="divide-y max-w-2xl mx-auto divide-gray-200">
                        <div className="py-4">
                            <h2 className="mb-2 lg:text-3xl text-lg my-5 text-center font-semibold">Profile Information</h2>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <span className="relative mt-5 flex h-48 w-48 shrink-0 overflow-hidden rounded-full">
                                        <img
                                            className="aspect-square h-full w-full"
                                            alt=""
                                            src={users?.imageURL}
                                        />
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

                        <div className='flex justify-between'>
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


                        <button className="block text-white bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => document.getElementById('my_modal_1').showModal()}> Update Profile</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">

                                <form key={users._id} onSubmit={handleSubmit(handleUpdate)} className="space-y-6">


                                    <input type="text" className='text-black' defaultValue={users?._id} {...register('id')} name="" id="" />
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            User Name
                                        </label>
                                        <input
                                            type="text"
                                            {...register("name", { required: true, minLength: 6 })}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                            placeholder="User name" defaultValue={users?.name}

                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            User Email
                                        </label>
                                        <input type="email" {...register("email")}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                            placeholder="User email" readOnly defaultValue={users?.email}


                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            User Photo URL
                                        </label>
                                        <input type="text"
                                            {...register("photoURL")}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                            placeholder="User PhotoURL" defaultValue={users?.imageURL}

                                        />
                                    </div>

                                    <div className='lg:flex gap-3'>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Phone Number
                                            </label>
                                            <input type="text" {...register("phoneNumber")}
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                placeholder="User Phone Number" defaultValue={users?.phoneNumber}


                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Age
                                            </label>
                                            <input type="text" {...register("age")}
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                placeholder="User age" defaultValue={users?.age}


                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Gender
                                            </label>
                                            <input type="text" {...register("gender")}
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                placeholder="User gender" defaultValue={users?.gender}


                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Address
                                        </label>
                                        <input type="text" {...register("address")}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                            placeholder="User address" defaultValue={users?.address}


                                        />
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <button className="btn bg-[#0360D9] mt-5 text-white w-full" type='submit'> Update Profile</button>
                                        </div>

                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn bg-red-500 text-white w-full">Close</button>
                                            </form>
                                        </div>
                                    </div>



                                </form>



                            </div>
                        </dialog>



                    </div>
                ))

            }



        </>
    );
};

export default Profile;