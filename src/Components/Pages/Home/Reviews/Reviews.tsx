import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Reviews = () => {

    const [sliderRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 2, spacing: 5 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 10 },
            },
        },
        slides: { perView: 1 },
    })

    const Reviews =[
        {
    "name":"Mary Jones",
    "position":"CEO,Business Co.",
    "review":"Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.",
    "rating":4
        },
        {
    "name":"Kylie Foster",
    "position":"Editor,CEO",
    "review":"Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed. Beatae vitae dicta. Adipiscing elit, sed do eiusmod tempor incididunt.",
    "rating":5
        },
        {
    "name":"Lisa Matthews",
    "position":"Photographer.",
    "review":"Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed. Beatae vitae dicta. Adipiscing elit, sed do eiusmod tempor incididunt.",
    "rating":5
        },
        {
    "name":"Justine Lee",
    "position":"SEO instruct",
    "review":"Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed. Beatae vitae dicta. Adipiscing elit, sed do eiusmod tempor incididunt.",
    "rating":4
        },
        {
    "name":"Nick More",
    "position":"CEO,Business Co.",
    "review":"Explicabo emo enimbeatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed. Beatae vitae.",
    "rating":4
        },
        {
    "name":"John Dou",
    "position":"CEO,Business Co.",
    "review":"Adipiscing elit vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
    "rating":4
        },
        {
    "name":"Mary Jones",
    "position":"CEO,Business Co.",
    "review":"Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.",
    "rating":5
        }
    ]

    return (
        <div className="lg:my-20">
            <h1 className=" text-center  mt-10 font-bold lg:text-5xl text-3xl mb-10">What <span className="text-[#0360F9]">Our Member's</span> Saying About Us</h1>
            <div ref={sliderRef} className="keen-slider">
                <div className="flex justify-around lg:px-48 pt-10 pb-10  ">
                    {
                        Reviews.map((review) => (
                            <div key={review.name}>
                                <div className="container flex flex-col keen-slider__slide mx-auto divide-y rounded-md ">
                                    <div className="flex justify-between p-4">
                                        <div className="flex space-x-4">

                                            <div>
                                                <h4 className="font-bold">{review.name}</h4>
                                                <span className="text-xs dark:text-gray-400">{review.position}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 dark:text-yellow-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                            </svg>
                                            <span className="text-xl font-bold">{review.rating}</span>
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-2 text-sm">
                                        <p>{review.review}</p>

                                    </div>
                                </div>

                                
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Reviews;