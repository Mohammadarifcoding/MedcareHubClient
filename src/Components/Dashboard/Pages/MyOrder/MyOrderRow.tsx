import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';


const MyOrderRow = ({ order, handleDeleteMyOrder }) => {
    const { _id, mobile, Address, City, Country, status } = order;


    return (
        <>
            <tr className="bg-[#FFFFFF] hover:bg-[#fafafa7e]">
                <td className="border-t px-6 py-4  ">{_id}</td>
                <td className="border-t px-6 py-4  ">{mobile}</td>
                <td className="border-t px-6 py-4 text-center">
                    {Address} <br />
                    {City}, {Country}
                </td>
                <td className="border-t px-6 py-4 text-center">
                    {status}
                </td>

                <td className="px-6 py-4 border-t ">
                    <button onClick={() => handleDeleteMyOrder(order)} className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-red-700  lg:ml-11"  >
                        <AiOutlineDelete />
                    </button>
                </td>
            </tr>
        </>

    );
};

export default MyOrderRow;