import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../Css/Footer.css'
import Whatsapp from '../../Assests/Icons/whatsapp.png'
import gmail from '../../Assests/Icons/gmail.png'
const Footer = () => {
    return (
        <Container fluid className="footerWrapper"><Container >
            <Row className='footerDescription'>
                    <Col className=''>
                        <h3>Let’s talk</h3>
                        <h1>Book an appointment?</h1>
                    </Col>
                    <Col className="contactInfo">
                        <div className='mail'>
                            <p>someone@example.com</p>
                            <img src={gmail} alt="gmailIcons" />
                        </div>
                        <div className="phone">
                            <p>+91- 385 526 5060</p>
                            <img src={Whatsapp} alt="What'sApp" />

                        </div>
                    </Col>

            </Row>
            < hr className="horizontalLine" />
            <Row>
                <p className="footerLastDescription">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae facilisis lorem. Integer non pharetra mauris, non tincidunt metus. Aenean in lectus diam...
                </p>
            </Row>

        </Container>
        </Container>


    );
};

export default Footer;