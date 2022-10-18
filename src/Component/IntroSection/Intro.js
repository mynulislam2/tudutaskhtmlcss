import React, { useReducer, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import '../../Css/Intro.css'
const Intro = () => {

    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            ShowDetails: true,
            ShowTechniques: false,
        }
    );

    return (
        <Container fluid className="IntroBg mb-5">
            <Container className="mt-4">
                <Row>
                    <div>
                        <h1 className="IntroTittle">Yoga for Flat Abs</h1>
                        <p className='subTittle'>90 Days program</p>
                    </div>
                </Row>
                <Row >

                    <Col xs={12} sm={12} lg={6} className="mb-4">
                        <ReactPlayer  className="IntroVideo" url='https://www.youtube.com/watch?v=lT7BVniyc6Y&ab_channel=ZillurRahman' controls={true}  />

                    </Col>
                    <Col xs={12} sm={12} lg={6}>
                        <ul className='IntroNav'>
                            <li className={`${state.ShowDetails ? "IntroNavActive" : "IntroNavDeActive"}`} onClick={() => setState({ ShowDetails: true, ShowTechniques: false })}>
                                Details
                            </li>
                            <li className={`${state.ShowTechniques ? "IntroNavActive" : "IntroNavDeActive"}`} onClick={() => setState({ ShowTechniques: true, ShowDetails: false })}>
                                Techniques
                            </li>
                        </ul>
                        <div >
                            <div className="introDesc">
                                {state.ShowTechniques ? <p>
                                    Choose a quiet space so that you can do the session uninterrupted.
                                    Make sure there is at least 2 hours gap between a meal and the class. Choose a quiet space so that you can do the session uninterrupted.
                                    Make sure there is at least 2 hours gap between a meal and the class.Make sure there is at least 2 hours gap between a meal and the class.
                                    Put all other devices aside and enjoy.
                                </p> : <p>Choose a quiet space so that you can do the session uninterrupted.
                                    Make sure there is at least 2 hours gap between a meal and the class. Choose a quiet space so that you can do the session uninterrupted.
                                    Make sure there is at least 2 hours gap between a meal and the class.Make sure there is at least 2 hours gap between a meal and the class.
                                    .Techniques are good</p>}
                            </div>
                            <div className="introDescription">
                                <div>
                                    <p>AED 99/-</p>
                                    <div className="IntrosButtons">
                                        <button>Join now </button>
                                        <button>View Schedule</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container></Container>

    );
};

export default Intro;