import { AiOutlineDelete } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';

const AllPatientRow = ({ user }) => {
    const { patientName, Age, bloodGroup, patientIssue, Gender } = user;

    return (
        <tr className='bg-[#FFFFFF] hover:bg-[#fafafa7e]'>
            <td className="border-t px-6 py-4  ">{user?.patientName}</td>
            <td className="border-t px-6 py-4  ">{user?.Age}</td>
            <td className="border-t px-6 py-4 text-center">{user?.bloodGroup}</td>
            <td className="border-t px-6 py-4 text-center">{user?.patientIssue}</td>
            <td className="border-t px-6 py-4 text-center">{user?.Gender}</td>

            <td className="px-6 py-4 border-t text-center">
                <button className="text-white btn btn-ghost  hover:bg-[#393E46] bg-[#0360D9] hover:text-red-800">Pending</button>
            </td>

            <td className="px-6 py-4 border-t text-center">
                <div className="text-2xl flex justify-center flex-col md:flex-row gap-5">
                    <button className="text-blue-700">
                        <TiTickOutline />
                    </button>
                    <button className="text-red-700">
                        <AiOutlineDelete />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default AllPatientRow;
