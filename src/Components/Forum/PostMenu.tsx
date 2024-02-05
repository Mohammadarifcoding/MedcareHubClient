import React from 'react';
import { FaSearch } from "react-icons/fa";

const PostMenu = () => {
    return (
        <div className="px-11 py-5 mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <ul className="flex gap-2">
                        <button className="border-4 p-2 border-s-violet-200">All Post</button>
                        <button className="border-4 p-2 border-s-violet-200">My Post</button>
                        <button className="border-4 p-2 border-s-violet-200">Dr. Post</button>
                        <button className="border-4 p-2 border-s-violet-200">Patient Post</button>
                    </ul>
                </div>
                <div>
                    <button className="flex items-center gap-1 p-3 bg-blue-300 rounded">
                        <FaSearch />
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostMenu;