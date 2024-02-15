import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';
import { base_URL } from '../../../../utills/BaseURL.ts';

const AllCompany = () => {
    const [company, setCompany] = useState();
    useEffect(() => {
        fetch(`${base_URL}/Companys`)
            .then((res) => res.json())
            .then((data) => setCompany(data));
    }, []);
    console.log(company);
    return (
        <>
            <div className="mt-5 ml-3 md:ml-0 md:my-5">
                <h1 className="text-2xl font-semibold">All Company</h1>
                <p>Explore and mange All Company effortlessly in one place.</p>
            </div>
            <div className="md:pt-0 pt-8 md:ml-4">
                <div className="overflow-x-auto w-full rounded-lg">
                    <table className="table w-full ">
                        <thead className="bg-[#fafafad5] px-6 py-3 text-center h-12 md:h-14 text-black text-sm lg:text-lg ">
                            <tr>
                                <th>Company Name</th>
                                <th>Company Email</th>
                                <th>Owner Email</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-base-300 ">
                            {company?.map((user) => (
                                <tr className="bg-[#FFFFFF] hover:bg-[#fafafa7e] " key={user?._id}>
                                    <td className="flex flex-col md:flex-row items-center justify-center text-center md:justify-start gap-1.5 pt-5 md:pt-3  md:gap-2">
                                        <img className="w-12 h-12 rounded-full" src={user?.comimage} alt={user?.comname} />
                                        <h3 className="font-medium text-sm">{user?.comname}</h3>
                                    </td>

                                    <td className="border-t px-6 py-4 text-center ">{user?.comemail}</td>
                                    <td className="border-t px-6 py-4 text-center">{user?.owneremail}</td>

                                    <td className="px-6 py-4 border-t text-center">
                                        <button className="text-white btn btn-ghost  hover:bg-[#393E46] bg-[#0360D9] hover:text-red-800">Pending</button>
                                    </td>
                                    <td className="px-6 py-4 border-t text-center">
                                        <div className="text-2xl flex justify-center flex-col md:flex-row gap-5">
                                            <button className="text-blue-500 hover:text-blue-800">
                                                <TiTickOutline />
                                            </button>
                                            <button className="text-red-500 hover:text-red-800">
                                                <AiOutlineDelete />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {/* Add more rows with user details */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllCompany;
