import React from "react";
import Container from "../../Shared/Container/Container.tsx";
import Banner from "./Banner/Banner.tsx";
import Collection from "./Collection/Collection.tsx";
import LatestTrend from "./LatestTrend/LatestTrend.tsx";
import SpecialistCard from "./SpecialistCard/SpecialistCard.tsx";
import DoctorSpecialist from "./DoctorSpecialist/DoctorSpecialist.tsx";
import ShortAboutUs from "./ShortAboutUs/ShortAboutUs.tsx";
import HomePoster from "./HomePoster/HomePoster.tsx";
import Reviews from "./Reviews/Reviews.tsx";

function Home() {
    return (

            <div className=" ">
           <Banner></Banner>
           <SpecialistCard></SpecialistCard>
           <DoctorSpecialist></DoctorSpecialist>
           <ShortAboutUs></ShortAboutUs>
           <HomePoster></HomePoster>
           <Reviews></Reviews>
           <Collection></Collection>
           <LatestTrend></LatestTrend>
            </div>
           
        
    );
};

export default Home;