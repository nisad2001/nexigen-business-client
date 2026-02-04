import React from 'react';
import RealWorldExperience from '../../components/Section/RealWorldExperience/RealWorldExperience';
import AboutUs from '../../components/Section/AboutUs/AboutUs';
import LetestProject from '../../components/Section/LetestProject/LetestProject';
import HowWeWork from '../../components/Section/HowWeWork/HowWeWork';
import OurServices from '../../components/Section/OurServices/OurServices';
import Faq from '../../components/Section/Faq/Faq';
import CustomerFeedback from '../../components/Section/CustomerFeedback/CustomerFeedback';
import Consultent from '../../components/Section/Consultent/Consultent';
import Blog from '../../components/Section/Blog/Blog';


const Home = () => {
    return (
        <div>
            <RealWorldExperience></RealWorldExperience>
            <AboutUs></AboutUs>
            <LetestProject></LetestProject>
            <HowWeWork></HowWeWork>
            <OurServices></OurServices>
            <Faq></Faq>
            <CustomerFeedback></CustomerFeedback>
            <Consultent></Consultent>
            <Blog></Blog>
        </div>
    );
};

export default Home;