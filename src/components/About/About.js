import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Container className='my-5 pt-5'>
            <Row>
                <Col className='px-5'>
                    <p>
                    Jim Fisher is PCMag's lead analyst for cameras, drones, and digital imaging. In over 10 years at PCMag, he’s reviewed hundreds of pieces of photo gear, running the gamut from instant cameras to high-end SLRs and lenses used for reportage and on the sidelines.
                    </p>

                    <p>
                    Jim has a soft spot for vintage lenses, and often dusts off classics to try with the latest mirrorless cameras. His photographic interests include wildlife and birds (waterfowl are his favorites), boneyards, and nature scenes.
                    </p>

                    <p>
                    In his spare time, Jim enjoys watching movies and TV, playing video games (on easy mode), and a good cup of coffee. You can find him on Instagram
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;