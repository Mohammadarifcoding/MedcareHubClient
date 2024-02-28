import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const OrdersRow = ({ user, handleDeleteOrder, ChangeOrderStatus }) => {
    const { _id, name, mobile, Address, City, Country, Products,status } = user;

    const productName = Products?.map((medicine) => (
        <p className="w-40" key={medicine.medicine._id}>
            {medicine.medicine.Medname}
        </p>
    ));

    return (
        <tr className="bg-[#FFFFFF] hover:bg-[#fafafa7e]">
            <td className="border-t px-6 py-4  ">{name}</td>
            <td className="border-t px-6 py-4  ">{mobile}</td>
            <td className="border-t px-6 py-4 text-center">
                {Address} <br />
                {City}, {Country}
            </td>
            <td className="border-t px-6 py-4 text-center">{productName}</td>
            <td className="border-t px-6 py-4 text-center">{Products?.length}</td>
            <td className="border-t px-6 py-4 text-center">
                {status}
            </td>
            <td className="px-6 py-4 border-t text-center">
                <button onClick={() => ChangeOrderStatus(user, "Processing")} className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-blue-700 lg:ml-11" >
                    <AiOutlineCheck />
                </button>
            </td>

            <td className="px-6 py-4 border-t text-center">
                <button onClick={() => ChangeOrderStatus(user, "Rejected")} className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-red-700  lg:ml-11"  >
                    <RxCross2 />
                </button>
            </td>
            <td className="border-t px-6 py-4 text-center">
                <button className="text-white btn btn-ghost bg-red-500 " onClick={() => handleDeleteOrder(_id)}>
                    Cancel
                </button>
            </td>
        </tr>
    );
};

export default OrdersRow;
