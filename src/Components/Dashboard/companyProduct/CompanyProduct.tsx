import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

const CompanyProduct = () => {
    return (
        <>
            <div className="mt-5 ml-3 md:ml-0 md:my-5">
                <h1 className="text-2xl font-semibold">Company Product</h1>
                <p>Explore and mange your Company Product inventory effortlessly in one place.</p>
            </div>

            <div className="md:pt-0 pt-8 md:ml-4">
                <div className="overflow-x-auto w-full rounded-lg">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            {/* row 1 */}
                            <tr className="bg-[#fafafad5] h-12 md:h-14 text-black text-sm lg:text-lg ">
                                <th>Medicine Name</th>
                                <th>Category</th>
                                <th>Company</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-base-300">
                            {/* row 1 */}
                            <tr className="bg-[#FFFFFF] hover:bg-[#fafafa7e] ">
                                <td className=" flex items-center gap-1.5 pt-5 md:pt-3  md:gap-2">
                                    <img className="w-12 h-12 rounded-md" src="https://i.ibb.co/6JZMKrD/71m5-N6h-4-JL-AC-UF1000-1000-QL80.jpg" alt="Echinacea Extract" />
                                    <h3 className="font-medium text-sm">Echinacea Extract</h3>
                                </td>

                                <td className="font-medium text-sm">Herbal Care</td>
                                <td className="font-medium text-sm ">NatureWellness</td>
                                <td className="">
                                    <p className="font-medium text-sm "> $19.99</p>
                                </td>
                                <td className="">
                                    <button className="text-xl mb-5  ml-4 md:ml-0 md:mb-0 mr-5">
                                        <FiEdit />
                                    </button>
                                    <button className="text-red-600 text-xl ml-4 md:ml-0">
                                        <AiOutlineDelete />
                                    </button>
                                </td>
                            </tr>
                            {/* row2 */}
                            <tr className="bg-[#FFFFFF] hover:bg-[#fafafa7e] ">
                                <td className=" flex items-center gap-1.5 pt-5 md:pt-3  md:gap-2">
                                    <img className="w-12 h-12 rounded-md" src="https://i.ibb.co/8NKrrSt/download-5.jpg" alt="Echinacea Extract" />
                                    <h3 className="font-medium text-sm">Turmeric Capsules</h3>
                                </td>

                                <td className="font-medium text-sm">Herbal Care</td>
                                <td className="font-medium text-sm ">GreenBotanicals</td>
                                <td className="">
                                    <p className="font-medium text-sm "> $24.99</p>
                                </td>
                                <td className="">
                                    <button className="text-xl mb-5  ml-4 md:ml-0 md:mb-0 mr-5">
                                        <FiEdit />
                                    </button>
                                    <button className="text-red-600 text-xl ml-4 md:ml-0">
                                        <AiOutlineDelete />
                                    </button>
                                </td>
                            </tr>

                            {/* row3 */}
                            <tr className="bg-[#FFFFFF] hover:bg-[#fafafa7e] ">
                                <td className=" flex items-center gap-1.5 pt-5 md:pt-3  md:gap-2">
                                    <img className="w-12 h-12 rounded-md" src="https://i.ibb.co/1qvg3yG/images-2.jpg" alt="Echinacea Extract" />
                                    <h3 className="font-medium text-sm">Ginger Tea</h3>
                                </td>

                                <td className="font-medium text-sm">Herbal Care</td>
                                <td className="font-medium text-sm ">HarmonyHerbs</td>
                                <td className="">
                                    <p className="font-medium text-sm "> $9.99</p>
                                </td>
                                <td className="">
                                    <button className="text-xl mb-5  ml-4 md:ml-0 md:mb-0 mr-5">
                                        <FiEdit />
                                    </button>
                                    <button className="text-red-600 text-xl ml-4 md:ml-0">
                                        <AiOutlineDelete />
                                    </button>
                                </td>
                            </tr>

                            {/* row4*/}
                            <tr className="bg-[#FFFFFF] hover:bg-[#fafafa7e] ">
                                <td className=" flex items-center gap-1.5 pt-5 md:pt-3  md:gap-2">
                                    <img className="w-12 h-12 rounded-md" src="https://i.ibb.co/bRqBTFh/download-6.jpg" alt="Echinacea Extract" />
                                    <h3 className="font-medium text-sm">Peppermint Oil</h3>
                                </td>

                                <td className="font-medium text-sm">Herbal Care</td>
                                <td className="font-medium text-sm ">EssentialWell</td>
                                <td className="">
                                    <p className="font-medium text-sm "> $14.99</p>
                                </td>
                                <td className="">
                                    <button className="text-xl mb-5  ml-4 md:ml-0 md:mb-0 mr-5">
                                        <FiEdit />
                                    </button>
                                    <button className="text-red-600 text-xl ml-4 md:ml-0">
                                        <AiOutlineDelete />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        {/* foot */}
                    </table>
                </div>
            </div>
        </>
    );
};

export default CompanyProduct;
