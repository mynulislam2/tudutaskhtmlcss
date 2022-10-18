import React from 'react';
import CircleImage from '../../Assests/background/Circle.png'
import women from "../../Assests/People/girl.png"
import '../../Css/ScheduleImage.css'
const Schedule = () => {
    return (
        <div className='CircleWrapper'>
            <div className='BgCircleImage'>


            </div>
            <div className='WomenImagebg'>
            </div>
            <img className='womenImage' src={women} alt="" />

        </div>


    );
};

export default Schedule;