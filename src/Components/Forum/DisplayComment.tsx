import React from 'react';

const DisplayComment = ({ commentData }) => {
    const { id, user, userImg, comment } = commentData;
    return (
        <div>
            <div className="flex items-start gap-2 my-4">
                <img className="w-[40px] h-[40px] bg-slate-500 object-cover rounded-full hover:blur-[2px] duration-500" src={userImg} alt="" />
                <div className="rounded-2xl border shadow-sm bg-[#F0F2F5] px-3 py-2">
                    <h1 className="text-md font-medium text-[#05051C]">{user}</h1>
                    <p className="text-md text-[#050505]">{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default DisplayComment;
