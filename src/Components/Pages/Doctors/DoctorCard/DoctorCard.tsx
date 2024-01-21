import React from 'react';
import Docotrs from '../../../../Data/Doctor.ts';

const DoctorCard = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
        {
            Docotrs?.map((data) => (
                <div key={data.ID}>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <figure className="px-5 pt-5">
                            <img className="rounded-t-lg lg:h-[200px]  lg:w-[700px]" src={data.image} alt="" />
                        </figure>
                        
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.DocName}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.service}</p>
                            <button className="btn bg-[#0360D9] text-white w-full">View Profile</button>
                        </div>
                    </div>
                </div>
            ))
        }



    </div>
    );
};

export default DoctorCard;