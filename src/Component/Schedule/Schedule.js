import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import CircleImage from '../../Assests/background/Circle.png'
// import women from "../../Assests/People/girl.png"
import women from '../../Assests/background/Group_286.png'
import leftArrow from '../../Assests/Icons/leftArrow.png'
import rightArrow from '../../Assests/Icons/rightarrow.png'
import Element from '../../Assests/Ellipse 20.png'
import '../../Css/Schedule.css'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";


import { Navigation } from "swiper";
const Schedule = () => {
    const [SelectedDay, SetSelectedDay] = useState(1)

    const Days = [
        {
            day: 'Day 1- Class',
            dayNum: 1,
            description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
            day: 'Day 2- Class',
            dayNum: 2,
            description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
            day: 'Day 3- Class',
            dayNum: 3,
            description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
            day: 'Day 4- Class',
            dayNum: 4,
            description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
            day: 'Day 5- Class',
            dayNum: 5,
            description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
            day: 'Day 6- Class',
            dayNum: 6,
            description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        }
    ]

    var IndexOfSelectedDay = Days.findIndex(object => {
        return object.dayNum === SelectedDay
    })
    if (IndexOfSelectedDay == 5) {
        IndexOfSelectedDay = -1
    }
    const SelectedDayUpdate = Days[IndexOfSelectedDay + 1]
    return (
        <Container>
            <h3>Schedule</h3>
            <Row xs={1} sm={1} md={1} lg={2} xl={2}>
                <Col className="position-relative">
                    <img className='YogaBanner' src={women} alt="" />
                    {SelectedDay == 1 ? <div className='ElementBg1'>
                        {SelectedDay}
                    </div> : SelectedDay == 2 ? <div className='ElementBg2'>
                        {SelectedDay}
                    </div> : SelectedDay == 3 ? <div className='ElementBg3'>
                        {SelectedDay}
                    </div> : SelectedDay == 4 ? <div className='ElementBg4'>
                        {SelectedDay}
                    </div> : SelectedDay == 5 ? <div className='ElementBg5'>
                        {SelectedDay}
                    </div> : SelectedDay == 6 ? <div className='ElementBg6'>
                        {SelectedDay}
                    </div> : ""}
                </Col>
                <Col>
                    <Swiper
                        rewind={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        onSlideChange={() => SetSelectedDay(SelectedDayUpdate.dayNum)}
                    >

                        {
                            Days.map((day) => {
                                return <SwiperSlide className="w-100">
                                    <div>
                                        <div className=' mb-3'>
                                            <h2 className="ScheduleTittle">{day.day} </h2>

                                        </div>
                                        <div className='TimeWrapper'>
                                            <select className='Times'>
                                                <option value='1'>week 1</option>
                                                <option value='2'>week 2</option>
                                                <option value='3'>week 3</option>
                                            </select>
                                        </div>
                                        <div className='ScheduleDesc mt-3'>
                                            <p>
                                                {day.description}
                                            </p>
                                            <a className="joinbtn">
                                                Join Today.
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })
                        }

                    </Swiper>
                </Col>
            </Row>
        </Container>






    );
};

export default Schedule;