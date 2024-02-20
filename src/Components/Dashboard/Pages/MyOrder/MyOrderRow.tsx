import React from 'react';

const MyOrderRow = ({ order }) => {
    const {_id, name, mobile, Address, City, Country, Products } = order;

    const productName = Products?.map((medicine) => (
        <p className="w-40" key={medicine.medicine._id}>
            {medicine.medicine.Medname}
        </p>
    ));
    return (
        <>
            <tr className="bg-[#FFFFFF] hover:bg-[#fafafa7e]">
                <td className="border-t px-6 py-4  ">{_id}</td>
                <td className="border-t px-6 py-4  ">{name}</td>
                <td className="border-t px-6 py-4  ">{mobile}</td>
                <td className="border-t px-6 py-4 text-center">
                    {Address} <br />
                    {City}, {Country}
                </td>
                <td className="border-t px-6 py-4 text-center">{productName}</td>
                {/* <td className="border-t px-6 py-4 text-center">
                    <button className="text-white btn btn-ghost bg-red-500 ">
                        Cencel
                    </button>
                </td> */}
            </tr>
        </>

    );
};

export default MyOrderRow;