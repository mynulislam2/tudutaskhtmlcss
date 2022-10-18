import React from 'react';
import Footer from '../../Component/Footer/Footer';
import LastFooter from '../../Component/Footer/LastFooter';
import Header from '../../Component/Header/Header';
import Intro from '../../Component/IntroSection/Intro';
import ProgramStructure from '../../Component/ProgramStructure/ProgramStructure';
import Schedule from '../../Component/Schedule/Schedule';
import TeacherSection from '../../Component/TeacherSection/TeacherSection';

const Home = () => {
    return (
        <>
        <Header/>
        <Intro/>
        <ProgramStructure/>
        <Schedule/>
        <TeacherSection/>
        <Footer/>
        <LastFooter/>
        </>
    );
};

export default Home;