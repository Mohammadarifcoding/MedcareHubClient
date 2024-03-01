import React, { useEffect, useState } from 'react';
import UseAuth from '../../../Hook/UseAuth.tsx';
import AllReview from './AllReview.tsx';







const Review = ({ id }) => {


    const { user } = UseAuth()
    const [data, setData] = useState();



    useEffect(() => {
        fetch(`http://localhost:5000/datarev/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [id]);
    return (
        <>

            <div>
                {
                    data?.map(data => <AllReview data={data} key={data.ID} />)
                }
            </div>

        </>
    );
};

export default Review;