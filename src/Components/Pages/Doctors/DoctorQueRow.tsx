import { TiTickOutline } from 'react-icons/ti';
import { MdDelete } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';

const DoctorQueRow = ({ doctor, handleChangeDoctorStatus }) => {
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
                <div className="text-3xl flex flex-col md:flex-row items-center justify-center gap-6">
                    <button onClick={() => handleChangeDoctorStatus(doctor, "Accepted")} className="text-blue-700">
                        <TiTickOutline />
                    </button>
                    <button className="text-red-600">
                        <AiOutlineDelete />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default DoctorQueRow;
