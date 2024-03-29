import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const AllCompanyrow = ({ company, handleChangeCompanyStatus, handleDeleteCompany }) => {
    const { comname, comemail, owneremail, status } = company
    console.log(company);
    return (
        <tr className='bg-[#FFFFFF] hover:bg-[#fafafa7e]'>
            <td className="border-t px-6 py-4 text-center ">{comname}</td>
            <td className="border-t px-6 py-4 text-center ">{comemail}</td>
            <td className="border-t px-6 py-4 text-center">{owneremail}</td>


            <td className="px-6 py-4 border-t text-center">

                {status}

            </td>
            <td className="px-6 py-4 border-t text-center">
                <button onClick={() => handleChangeCompanyStatus(company, "Accepted")} className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-blue-700 lg:ml-11" >
                    <AiOutlineCheck />
                </button>
            </td>

            <td className="px-6 py-4 border-t text-center">
                <button onClick={() => handleChangeCompanyStatus(company, "Rejected")} className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-red-700  lg:ml-11"  >
                    <RxCross2 />
                </button>
            </td>

            <td className="px-6 py-4 border-t text-center">
                <button onClick={() => handleDeleteCompany(company)} className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-red-700  lg:ml-11"  >
                    <AiOutlineDelete />
                </button>
            </td>

        </tr>
    );
};

export default AllCompanyrow;