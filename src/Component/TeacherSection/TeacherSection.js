import React, { useReducer } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import manTeacher from '../../Assests/People/man.png'
import '../../Css/TeacherSection.css'
import leftArrow from '../../Assests/Icons/leftArrow.png'
import rightArrow from '../../Assests/Icons/rightarrow.png'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { Navigation } from "swiper";

const TeacherSection = () => {
    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            TeacherAshrei: true,
        }
    );
    return (
        <Container className="py-5">
            <Row className="my-5">
                <p className='teacherSectionHeader'>Our Teachers</p>

            </Row>
            <Row className='justify-content-between TeacherWrapper'>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <div>
                        <ul className="Teachers">
                            <li ><h5>Ashrei Mitra</h5></li>
                            <li ><h5>Rahul</h5></li>
                            <li className={`${state.TeacherAshrei && "TeacherList"}`} onClick={() => setState({ TeacherAshrei: true })}><h5>Ashrei Mitra</h5></li>
                            <li ><h5>Ashray</h5></li>
                            <li ><h5>Ashish</h5></li>
                            <li ><h5>Zora</h5></li>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} className="">
                    <Swiper
                        rewind={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper1"
                        onSlideChange={() => console.log('slide change')}

                    >
                        <SwiperSlide className="w-100">
                            <div className='d-flex  justify-content-between gap-4 TeacherDesc'>
                                <div>
                                    <div className="TeacherImageWrapper ">
                                        <img className="TeacherImage " src={manTeacher} alt="" />
                                    </div>
                                    <p className="text-center TeacherName">
                                        Ashrei Mitra
                                    </p>
                                </div>

                                <div className='d-flex align-items-center MainDescTeacher'>
                                    <p>
                                        Ashrei Mitra started his journey in yoga at the age of 16. He was chosen by his master Dr. Bharat Thakur from a meditation workshop and has worked with him closely for many years to become one of the most senior teachers at Bharat Thakur Artistic Yoga. Combining his love of fitness, breathwork, functional training, and his deep knowledge of the human anatomy and yogic knowhow, he is committed to maximizing on the human potential by strengthening and opening up the body so that the mind naturally falls into a deep state of relaxation and meditation. He has taught yoga to people from all walks of life including athletes, celebrities and several top corporate organizations
                                    </p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className="w-100">
                            <div className='d-flex justify-content-between gap-4 TeacherDesc'>
                                <div>
                                    <div className="TeacherImageWrapper ">
                                        <img className="TeacherImage " src={manTeacher} alt="" />
                                    </div>
                                    <p className="text-center TeacherName">
                                        Ashrei Mitra
                                    </p>
                                </div>

                                <div className='d-flex align-items-center MainDescTeacher'>
                                    <p>
                                        Ashrei Mitra started his journey in yoga at the age of 16. He was chosen by his master Dr. Bharat Thakur from a meditation workshop and has worked with him closely for many years to become one of the most senior teachers at Bharat Thakur Artistic Yoga. Combining his love of fitness, breathwork, functional training, and his deep knowledge of the human anatomy and yogic knowhow, he is committed to maximizing on the human potential by strengthening and opening up the body so that the mind naturally falls into a deep state of relaxation and meditation. He has taught yoga to people from all walks of life including athletes, celebrities and several top corporate organizations
                                    </p>
                                </div>
                            </div>

                        </SwiperSlide>
                    </Swiper>

                </Col>
            </Row>
        </Container>
    );
};

export default TeacherSection;