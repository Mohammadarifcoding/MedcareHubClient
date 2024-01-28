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
        <div>

            <div className="mt-20 flex flex-col items-center justify-center text-[#0360D9]">

                <img className='w-[230px] mb-5 border-[3px] border-[#0360D9] rounded-full' src={user?.photoURL} alt="" />

                <h1>Status: {status} </h1>

                <div className="flex md:flex-row md:items-center md:space-x-6 space-y-6 md:space-y-0 bg-[#A5CCFF] p-6">


                    <div className="flex md:flex-row md:items-center md:space-x-12">
                        <div className="flex flex-col space-y-2">
                            <span>Your Name</span>
                            <input
                                className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm  text-[#0360D9] placeholder-gray-500"
                                readOnly defaultValue={user?.displayName}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <span>Your Email</span>
                            <input
                                className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm  text-[#0360D9] placeholder-gray-500"
                                readOnly defaultValue={user?.email}
                                type="email"
                            />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Profile;