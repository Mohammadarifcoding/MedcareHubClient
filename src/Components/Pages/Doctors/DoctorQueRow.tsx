import { TiTickOutline } from 'react-icons/ti';
import { AiOutlineDelete } from 'react-icons/ai';
import { RxCross2 } from "react-icons/rx";

const DoctorQueRow = ({ doctor, handleChangeDoctorStatus, handleDeleteDoctor }) => {
    const { DocName, DocType, Email, gender, status } = doctor;
    return (
        <tr className="bg-[#FFFFFF] hover:bg-[#fafafa7e] ">
            <td className="border-t px-6 py-4 text-center ">{DocName}</td>
            <td className="border-t px-6 py-4 text-center ">{DocType}</td>
            <td className="border-t px-6 py-4 text-center">{Email}</td>
            <td className="border-t px-6 py-4 text-center">{gender}</td>

            <td className="px-6 py-4 border-t text-center">
                <button className="text-white btn btn-ghost  hover:bg-[#393E46] bg-[#0360D9] hover:text-red-800">
                    {status}
                </button>
            </td>

            <td className="px-6 py-4 border-t text-center">
                <button className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-blue-700 lg:ml-11" onClick={() => handleChangeDoctorStatus(doctor, "Accepted")} >
                    <TiTickOutline />
                </button>
            </td>

            <td className="px-6 py-4 border-t text-center">
                <button className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-red-700  lg:ml-11" onClick={() => handleChangeDoctorStatus(doctor, "Rejected")} >
                    <RxCross2 />
                </button>
            </td>

            <td className="px-6 py-4 border-t text-center">
                <button className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-red-700  lg:ml-11" onClick={() => handleDeleteDoctor(doctor)} >
                    <AiOutlineDelete />
                </button>
            </td>

        </tr>
    );
};

export default DoctorQueRow;
