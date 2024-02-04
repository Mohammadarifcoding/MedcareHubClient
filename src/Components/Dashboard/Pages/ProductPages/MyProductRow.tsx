import { Link } from "react-router-dom";

const MyProductRow = ({ handleDeleteMedicine, medicine }) => {
    const { _id, Image, Medname, Category, Price } = medicine;
    return (
        <tr>
            <td className="items-center justify-center flex mx-auto">
                <img className="w-24 h-20 rounded-md" src={Image} alt={Medname} />
            </td>
            <td>
                <div>
                    <div className="font-bold">{Medname}</div>
                </div>
            </td>

            <td className="font-bold">${Price}</td>
            {/* <td className="font-bold">{_id}</td> */}
            <td className="font-bold">{Category}</td>
            <th>
                <Link to={`/dashboard/updateproduct/${_id}`}>
                <button className="btn bg-orange-500 text-white ">
                    Edit
                </button></Link>
                
            </th>
            <th>
                <button className="btn bg-red-600 text-white " onClick={() => handleDeleteMedicine(_id)}>
                    Delete
                </button>
            </th>
        </tr>
    );
};

export default MyProductRow;
