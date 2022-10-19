import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import CircleImage from '../../Assests/background/Circle.png'
// import women from "../../Assests/People/girl.png"
import women from '../../Assests/background/Group 286.png'
import leftArrow from '../../Assests/Icons/leftArrow.png'
import rightArrow from '../../Assests/Icons/rightarrow.png'
import '../../Css/Schedule.css'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";


import { Navigation } from "swiper";
const Schedule = () => {
    return (
        <Container>
            <h3>Schedule</h3>

            <Row xs={1} sm={1} md={1} lg={2} xl={2}>
                <Col className="position-relative">
                    <img className='YogaBanner' src={women} alt="" />
                    <p className='Yogaday'>1</p>
                </Col>
                <Col>
                    <Swiper
                        rewind={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                              onSlideChange={() => console.log('slide change')}

                    >
                        <SwiperSlide className="w-100">
                            <div>
                            <div className='d-flex justify-content-between mb-3'>
                                <h2 className="ScheduleTittle">Day 1- Class </h2>

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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <a className="joinbtn">
                                    Join Today.
                                </a>
                            </div>

                        </div>
                        </SwiperSlide>
                        <SwiperSlide className="w-100">
                            <div>
                            <div className=' mb-3'>
                                <h2 className="ScheduleTittle">Day 1- Class </h2>

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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <a className="joinbtn">
                                    Join Today.
                                </a>
                            </div>

                        </div>
                        </SwiperSlide>

                    </Swiper>

                </Col>


            </Row>
        </Container>






    );
};

export default Schedule;