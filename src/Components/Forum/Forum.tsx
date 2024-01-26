import React from 'react';
import FNavBar from './FNavBar.tsx';
import CreatePost from './CreatePost.tsx';

const Forum = () => {
    return (
        <div className='container mx-auto'>

            <FNavBar></FNavBar>
            <CreatePost></CreatePost>
        </div>
    );
};

export default Forum;