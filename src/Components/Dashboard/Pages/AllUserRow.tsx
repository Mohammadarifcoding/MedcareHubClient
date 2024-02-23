import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AllUserRow = ({ user, handleDeleteUser, handleChangeUserRole }) => {
    const { imageURL, name, email, gender, role } = user;
    return (
        <tr className="bg-[#FFFFFF] hover:bg-[#fafafa7e] ">
            <td className=" flex flex-col md:flex-row items-center justify-center text-center md:justify-start gap-1.5 pt-5 md:pt-3  md:gap-2">
                <img className="w-12 h-12 rounded-full" src={imageURL} alt={name} />
                <h3 className="font-medium text-sm">{name}</h3>
            </td>

            <td className="font-medium text-sm">{email}</td>
            <td className="font-medium text-sm ">{gender}</td>
            <td className="font-medium text-sm "> {role}</td>
            <td>
                <ul className="menu menu-horizontal">
                    <li>
                        <details>
                            <summary>select</summary>
                            <ul className=" bg-base-100 rounded-t-none z-10">
                                <li onClick={() => handleChangeUserRole(user, 'admin')}>
                                    <Link>admin</Link>
                                </li>
                                <li onClick={() => handleChangeUserRole(user, 'user')}>
                                    <Link>user</Link>
                                </li>
                                <li onClick={() => handleChangeUserRole(user, 'Doctor')}>
                                    <Link>Doctor</Link>
                                </li>
                                <li onClick={() => handleChangeUserRole(user, 'Patient')}>
                                    <Link>Patient</Link>
                                </li>
                                <li onClick={() => handleChangeUserRole(user, 'Company')}>
                                    <Link>Company</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </td>
            <td className="px-6 py-4 text-center text-2xl">
                <button onClick={() => handleDeleteUser(user)} className="text-red-600    hover:text-red-800">
                    <AiOutlineDelete />
                </button>
            </td>
        </tr>
    );
};

export default AllUserRow;
