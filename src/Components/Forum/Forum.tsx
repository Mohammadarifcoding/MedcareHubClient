import React from 'react';
import FNavBar from './FNavBar.tsx';
import CreatePost from './CreatePost.tsx';
import PostMenu from './PostMenu.tsx';
import PostBox from './PostBox.tsx';

const Forum = () => {
    return (
        <div className='container mx-auto'>

            <FNavBar></FNavBar>
            <CreatePost></CreatePost>
            <PostMenu></PostMenu>
            <PostBox></PostBox>
        </div>
    );
};

export default Forum;