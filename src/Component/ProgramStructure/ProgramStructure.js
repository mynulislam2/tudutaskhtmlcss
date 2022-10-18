import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProgramStructureImage from '../../Assests/ProgramStructure.png'
import '../../Css/ProgramStructure.css'
const ProgramStructure = () => {
    return (
        <Container fluid className="programStructureWrapper">
            <Container>
                <Row>
                    <Col className="programDescription">
                        <div>
                            <h1>
                                Structure of program
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit, sed do eiusmod.
                            </p>
                        </div>
                        <div>
                            <p className='programDurations'><span className="programDuration">90</span> Days </p>
                            <div className="daysTask">
                                <p>Yoga</p>
                                <p>Recovery</p>
                                <p>Rest</p>
                                <p>Repeat</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src={ProgramStructureImage} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default ProgramStructure;