import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const AllPatientRow = ({ user, handleChangePatientStatus, handleDeletePatient }) => {
    const { patientName, Age, bloodGroup, patientIssue, Gender, status } = user;

    return (
        <tr className='bg-[#FFFFFF] hover:bg-[#fafafa7e]'>
            <td className="border-t px-6 py-4  ">{patientName}</td>
            <td className="border-t px-6 py-4  ">{Age}</td>
            <td className="border-t px-6 py-4 text-center">{bloodGroup}</td>
            <td className="border-t px-6 py-4 text-center">{patientIssue}</td>
            <td className="border-t px-6 py-4 text-center">{Gender}</td>

            <td className="px-6 py-4 border-t text-center">

                {status}

            </td>
            <td className="px-6 py-4 border-t text-center">
                <button className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-blue-700 lg:ml-11" onClick={() => handleChangePatientStatus(user, "Accepted")} >
                    <AiOutlineCheck />
                </button>
            </td>

            <td className="px-6 py-4 border-t text-center">
                <button className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-red-700  lg:ml-11" onClick={() => handleChangePatientStatus(user, "Rejected")} >
                    <RxCross2 />
                </button>
            </td>

            <td className="px-6 py-4 border-t text-center">
                <button className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-red-700  lg:ml-11" onClick={() => handleDeletePatient(user)} >
                    <AiOutlineDelete />
                </button>
            </td>

        </tr>
    );
};

export default AllPatientRow;
