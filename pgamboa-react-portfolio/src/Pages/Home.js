import React from "react";
// import HomeSection from "../Components/HomeSection/HomeSection";
import AboutSection from "../Components/About-Section/AboutSection";
// import MyWork from "../Components/MyWork/MyWork";
import Overview from '../Components/Overview/Overview';
import Description from "../Description/Description";
// import Contact from '../Components/Contact/Contact';

function Home() {
    return(
        <div>
        <Overview/>
        <Description/>
        {/* <MyWork/> */}
        <AboutSection/>
        {/* <Contact/> */}
        </div>
    );
};

export default Home;