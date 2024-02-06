import React from 'react';

const DisplayComment = ({ commentData }) => {
    const { id, user, userImg, comment } = commentData;
    return (
        <div>
            <div className='flex items-center gap-2 my-4'>
                <img className="w-[40px] h-[40px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src={userImg} alt="" />
                <h1 className='text-2xl font-bold underline'>{user}:</h1>
                <p className='text-xl'>{comment}</p>
            </div>
        </div>
    );
};

export default DisplayComment;