import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import UseAuth from '../../../../Hook/UseAuth.tsx';

const AllPatientRow = ({ patient, handleChangePatientStatus, handleDeletePatient }) => {
    const { patientName, Age, bloodGroup, patientIssue, Gender, status } = patient;
    const { user } = UseAuth()

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
                <button className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-blue-700 lg:ml-11" onClick={() => handleChangePatientStatus(patient, "Accepted")} >
                    <AiOutlineCheck />
                </button>
            </td>

            <td className="px-6 py-4 border-t text-center">
                <button className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-red-700  lg:ml-11" onClick={() => handleChangePatientStatus(patient, "Rejected")} >
                    <RxCross2 />
                </button>
            </td>
            <tr>
                {
                    user && (user.role === "Admin" || user.role === "Super") && (
                        <td className="px-6 py-4 border-t text-center">
                            <button className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-red-700  lg:ml-11" onClick={() => handleDeletePatient(patient)}>
                                <AiOutlineDelete />
                            </button>
                        </td>
                    )
                }

            </tr>




        </tr>
    );
};

export default AllPatientRow;
