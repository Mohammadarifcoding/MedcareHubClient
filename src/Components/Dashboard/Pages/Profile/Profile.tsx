import React from 'react';
import UseAuth from '../../../../Hook/UseAuth.tsx';

const Profile = () => {
    const { user } = UseAuth()

    // Determine the status based on the type of user
    const status = user?.role === 'doctor' ? 'Doctor' :
        user?.role === 'patient' ? 'Patient' :
            user?.role === 'company' ? 'Company User' :
                'Unknown';

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
                        
                        <div className="py-4">
                            <h2 className="mb-2 text-lg font-semibold">Email Address</h2>
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
            }

        </>
    );
};

export default Profile;