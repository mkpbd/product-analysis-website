import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LineCharts from '../LineCharts/LineCharts';
import StackAreaCharts from '../'

const Deshboard = () => {
    return (
       <>
        <Container>
            <Row>
                <Col className="sm-6">
                        <LineCharts></LineCharts>
                </Col>
                
                <Col className="sm-6">
                        <StackAreaCharts></StackAreaCharts>
                </Col>
                <Col className="sm-6">
                        <LineCharts></LineCharts>
                </Col>
                <Col className="sm-6">
                        <LineCharts></LineCharts>
                </Col>

            </Row>
        </Container>
       </>
    );
};

export default Deshboard;