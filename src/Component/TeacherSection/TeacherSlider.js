import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import manTeacher from '../../Assests/People/man.png'
import leftArrow from '../../Assests/Icons/leftArrow.png'
import rightArrow from '../../Assests/Icons/rightarrow.png'
const TeacherSlider = ({ teachers, SelectedTeacher, setSelectedTeacher }) => {

    var IndexOfSelectedTeacher = teachers.findIndex(object => {
        return object.name === SelectedTeacher
    })
    if (IndexOfSelectedTeacher == 5) {
        IndexOfSelectedTeacher = -1
    }
    const SelectedTeacherUpdate = teachers[IndexOfSelectedTeacher + 1]
    return (
        <>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper1"
                onSlideChange={() => setSelectedTeacher(SelectedTeacherUpdate.name)}
            >
                {
                    teachers.map((teacher) => {
                        return <SwiperSlide className="w-100">
                            <div className='d-flex  justify-content-between gap-4 TeacherDesc'>
                                <div>
                                    <div className="TeacherImageWrapper ">
                                        <img className="TeacherImage " src={manTeacher} alt="" />
                                    </div>
                                    <p className="text-center TeacherName">
                                        {teacher.name}
                                    </p>
                                </div>

                                <div className='d-flex align-items-center MainDescTeacher'>
                                    <p>
                                        {teacher.about}
                                    </p>
                                </div>
                            </div>

                        </SwiperSlide>

                    })
                }
            </Swiper>
        </>
    );
};

export default TeacherSlider;