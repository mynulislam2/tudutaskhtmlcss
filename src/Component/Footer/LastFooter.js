import React from 'react';
import { Container } from 'react-bootstrap';

const LastFooter = () => {
    return (
        <div>
            <Container fluid className="LastFooter">
                        <ul className="lastFooterDescription">
                            <li>© 2021 Copyright - Artistic yoga</li>
                            <li>Privacy policy</li>
                            <li>Terms of use</li>
                        </ul>
            </Container>
        </div>
    );
};

export default LastFooter;