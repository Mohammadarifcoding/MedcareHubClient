import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MyProductRow = ({ handleDeleteMedicine, medicine }) => {
    const { _id, Image, Medname, Category, Price, Company } = medicine;
    return (
        <tr className="bg-[#FFFFFF] hover:bg-[#fafafa7e] ">
            <td className=" flex items-center gap-1.5 pt-5 md:pt-3  md:gap-2">
                <img className="w-12 h-12 rounded-md" src={Image} alt={Medname} />
                <h3 className="font-medium text-sm">{Medname}</h3>
            </td>

            <td className="font-medium text-sm">{Category}</td>
            <td className="font-medium text-sm ">{Company}</td>
            <td className="">
                <p className="font-medium text-sm "> ${Price}</p>
            </td>
            <td className="">
                <Link to={`/dashboard/updateproduct/${_id}`}>
                    <button className="text-xl mb-5  ml-4 md:ml-0 md:mb-0 mr-5">
                        <FiEdit />
                    </button>
                </Link>
                <button className="text-red-600 hover:text-red-800 text-xl ml-4 md:ml-0" onClick={() => handleDeleteMedicine(_id)}>
                    <AiOutlineDelete />
                </button>
            </td>
        </tr>
    );
};

export default MyProductRow;
