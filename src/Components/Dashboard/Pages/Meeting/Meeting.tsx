import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Meeting = () => {
    const [meetingCode, setMeetingCode] = useState('');
    const navigate = useNavigate()

    const handleChange = (event) => {
        setMeetingCode(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, e.g., join the meeting with the provided code
        console.log('Joining meeting with code:', meetingCode);
        navigate(`/dashboard/meetingRoom/${meetingCode}`)
    };
    return (
        <div className="h-full">
            <div className="flex justify-center items-center h-screen">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="meetingCode">
                            Meeting Code
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="meetingCode"
                            type="text"
                            placeholder="Enter meeting code"
                            value={meetingCode}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Join Meeting
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Meeting;
