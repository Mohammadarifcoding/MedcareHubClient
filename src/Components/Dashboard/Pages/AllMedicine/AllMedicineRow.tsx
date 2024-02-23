import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const AllMedicineRow = ({ medicine, handleChangeMedicineStatus, handleDeleteMed }) => {
    const { Medname, Image, Category, Company, status } = medicine
    console.log(medicine);
    return (
        <tr className='bg-[#FFFFFF] hover:bg-[#fafafa7e]'>
            <td className="border-t px-6 py-4 flex items-center gap-1.5 pt-5 md:pt-3  md:gap-2 ">
                <img className="w-12 h-12 rounded-md" src={Image} alt="" />
                {Medname}</td>
            <td className="border-t px-6 py-4  ">{Category}</td>
            <td className="border-t px-6 py-4 text-center">{Company}</td>

            <td className="px-6 py-4 border-t text-center">
                {status}
            </td>
            <td className="px-6 py-4 border-t text-center">
                <button onClick={() => handleChangeMedicineStatus(medicine, "Accepted")} className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-blue-700 lg:ml-11" >
                    <AiOutlineCheck />
                </button>
            </td>

            <td className="px-6 py-4 border-t text-center">
                <button onClick={() => handleChangeMedicineStatus(medicine, "Rejected")} className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-red-700  lg:ml-11"  >
                    <RxCross2 />
                </button>
            </td>

            <td className="px-6 py-4 border-t text-center">
                <button onClick={() => handleDeleteMed(medicine)} className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-red-700  lg:ml-11" >
                    <AiOutlineDelete />
                </button>
            </td>

        </tr>
    );
};

export default AllMedicineRow;