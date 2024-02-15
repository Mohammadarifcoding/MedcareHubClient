import React from 'react';
import FNavBar from './FNavBar.tsx';
import CreatePost from './CreatePost.tsx';
import PostBox from './PostBox.tsx';
import UseAdmin from '../../Hook/UseAdmin.tsx';

const Forum = () => {
    const [isAdmin] = UseAdmin();
    console.log(isAdmin);
    return (
        <div className='container mx-auto'>

            <FNavBar></FNavBar>
            <CreatePost></CreatePost>
            {/* <PostMenu></PostMenu> */}
            <PostBox></PostBox>
        </div>
    );
};

export default Forum;