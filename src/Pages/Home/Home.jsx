import React from 'react';
import RealWorldExperience from '../../components/Section/RealWorldExperience/RealWorldExperience';
import AboutUs from '../../components/Section/AboutUs/AboutUs';
import LetestProject from '../../components/Section/LetestProject/LetestProject';
import HowWeWork from '../../components/Section/HowWeWork/HowWeWork';
import OurServices from '../../components/Section/OurServices/OurServices';


const Home = () => {
    return (
        <div>
            <RealWorldExperience></RealWorldExperience>
            <AboutUs></AboutUs>
            <LetestProject></LetestProject>
            <HowWeWork></HowWeWork>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;