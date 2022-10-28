import React, { useReducer, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Css/TeacherSection.css'



import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import TeacherSlider from './TeacherSlider';

const TeacherSection = () => {
    const [SelectedTeacher, setSelectedTeacher] = useState("Ashrei Mitras")
    const teachers = [
        {
            _id: "635bb714afc3bffc9fa1a8b4",
            picture: "https://depositphotos.com/60704989/stock-photo-number-10.html",
            name: "Ashrei Mitras",
            about: "Sit sint aliquip velit laborum non culpa adipisicing et irure ad duis eiusmod est. Laborum eu ut eu esse minim labore eu quis commodo sunt et cupidatat reprehenderit. Adipisicing esse quis nulla occaecat esse exercitation in irure labore occaecat irure. Excepteur proident eu et laboris commodo aute exercitation ipsum nisi excepteur tempor non ea non. Voluptate cillum cupidatat velit do consectetur ipsum commodo officia duis ex laboris incididunt labore.\r\n"
        },
        {
            _id: "635bb714ba0e0048bb86d814",
            picture: "http://placehold.it/32x32",
            name: "Rahul",
            about: "Consequat nisi irure irure deserunt proident mollit deserunt. Laborum consequat anim deserunt Lorem nostrud sunt do pariatur ex tempor ullamco nisi nostrud deserunt. Laborum pariatur aliquip incididunt nisi. Sit non esse veniam id id. Dolore cillum ipsum sint officia enim do dolor cupidatat fugiat officia labore consequat. Id cillum ullamco ad mollit proident adipisicing id voluptate dolor.\r\n"
        },
        {
            _id: "635bb71429722d6b761a1b90",
            picture: "http://placehold.it/32x32",
            name: "Ashrei Mitra",
            about: "started his journey in yoga at the age of 16. He was chosen by his master Dr. Bharat Thakur from a meditation workshop and has worked with him closely for many years to become one of the most senior teachers at Bharat Thakur Artistic Yoga. Combining his love of fitness, breathwork, functional training, and his deep knowledge of the human anatomy and yogic knowhow, he is committed to maximizing on the human potential by strengthening and opening up the body so that the mind naturally falls into a deep state of relaxation and meditation. He has taught yoga to people from all walks of life including athletes, celebrities and several top corporate organizations"
        },
        {
            _id: "635bb714157b673ee7df233e",
            picture: "http://placehold.it/32x32",
            name: "Ashray",
            about: "Do ipsum sint Lorem ea Lorem tempor culpa excepteur voluptate irure eu occaecat eiusmod. Est fugiat voluptate quis labore dolore ut esse quis nulla qui officia fugiat. Minim pariatur veniam laboris aliquip. Amet eiusmod exercitation aliqua commodo aliquip.\r\n"
        },
        {
            _id: "635bb714e88f372c04a26be8",
            picture: "http://placehold.it/32x32",
            name: "Ashish",
            about: "Ipsum anim et sunt laboris aliquip commodo. Sunt adipisicing quis nisi sint quis Lorem in officia sunt commodo proident. Consequat duis minim duis labore proident cupidatat. Consectetur eu cillum ullamco enim est velit ut cupidatat do ex laboris est officia dolore. Sint irure excepteur pariatur veniam do eiusmod velit eu in et ex pariatur consectetur aliqua.\r\n"
        },
        {
            _id: "635bb714553e4d5fb9d51bd8",
            picture: "http://placehold.it/32x32",
            name: "Zora",
            about: "Consectetur cupidatat pariatur voluptate fugiat. Dolore qui elit laborum id. Aliqua commodo veniam laborum aliqua dolore ea occaecat aliquip aute. Id ex velit ipsum id consectetur consequat ipsum ea.\r\n"
        }
    ]
console.log(SelectedTeacher)


    return (
        <Container className="py-5">
            <Row className="my-5">
                <p className='teacherSectionHeader'>Our Teachers</p>

            </Row>
            <Row className='justify-content-between TeacherWrapper'>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <div>
                        <ul className="Teachers">
                            {
                                teachers.map((teacher) => <li  className={`${teacher.name === SelectedTeacher ? "TeacherList" : "TeacherName"}`} onClick={() => setSelectedTeacher(teacher.name)}>{teacher.name}</li>)
                            }
                        </ul>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} className="">
                   <TeacherSlider teachers={teachers} SelectedTeacher={SelectedTeacher} setSelectedTeacher={setSelectedTeacher}/>
                    
                </Col>
            </Row>
        </Container >
    );
};

export default TeacherSection;