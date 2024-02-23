import React from 'react';
import FNavBar from './FNavBar.tsx';
import CreatePost from './CreatePost.tsx';
import PostBox from './PostBox.tsx';
import UseAdmin from '../../Hook/UseAdmin.tsx';

const Forum = () => {
    const [isAdmin] = UseAdmin();
    console.log(isAdmin);
    return (
        <>
            <FNavBar></FNavBar>
            <div className="container my-8 mx-auto">
                <CreatePost></CreatePost>
                {/* <PostMenu></PostMenu> */}
                <PostBox></PostBox>
            </div>
        </>
    );
};

export default Forum;
