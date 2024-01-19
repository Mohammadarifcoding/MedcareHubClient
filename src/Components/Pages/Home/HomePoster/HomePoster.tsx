import React from 'react';

const HomePoster = () => {
    return (
        <div className="hero h-[600px]" style={{ backgroundImage: `url(/Asset/last-section-bg.jpg)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 lg:text-5xl text-3xl font-bold">Buying medicines should be quick & easy!</h1>
                        <p className="mb-5">Build an online pharmacy with IPharm</p>
                        <button className="btn bg-[#0360D9] text-white">Buy Medicine</button>
                    </div>
                </div>
            </div>
    );
};

export default HomePoster;