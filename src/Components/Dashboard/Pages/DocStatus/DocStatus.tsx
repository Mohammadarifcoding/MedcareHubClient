import { useEffect, useState } from "react";
import StatusTable from "../StatusTable/StatusTable";

const DocStatus = () => {
    const [patients, setPatients] = useState([])

    useEffect(() => {
        fetch("/patients.json")
            .then(res => res.json())
            .then(data => setPatients(data));

    }, [])
    return (
        <div className="w-[90%] md:w-[80%] mx-auto">
            <div>
                <h2 className="text-xl font-bold mt-6 mb-4">Patient: {patients.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#0360D9] text-white">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>description</th>
                            <th>schedule</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        patients.map(({ name, email, description, schedule }, index) => (

                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{description}</td>
                                    <td>{schedule}</td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
            <div>
                <h1 className="text-xl font-bold mt-6">Doctor's Schedule</h1>
                <div className="grid grid-cols-2 gap-16">
                    <div>
                        <h1 className="mt-2">Monday - Fridayp</h1>
                        <h1 className="mt-2">Saturday</h1>
                        <h1 className="mt-2">Monday - Thusday</h1>
                        <h1 className="mt-2">Monday - Friday</h1>
                    </div>
                    <div>
                        <h1 className="mt-2">8.00-20.00</h1>
                        <h1 className="mt-2">9.00-18.30</h1>
                        <h1 className="mt-2">9.00-15.00</h1>
                        <h1 className="mt-2 mb-6">8.00-20.00</h1>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-bold mt-6 mb-4">Next Patient:</h2>
                <p>Name: Ava Jones <br />
                Email: ava.jones@example.com <br />
                Description: Neurology appointment <br />
                Schedule: 2024-02-05T12:30:00
                </p>

            </div>
        </div>
    )
}
export default DocStatus;