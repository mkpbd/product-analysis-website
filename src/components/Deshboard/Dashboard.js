import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LineCharts from '../LineCharts/LineCharts';
import BarCharts from '../BarCharts/BarCharts';
import StackedAreaCharts from '../StackedAreaCharts/StackedAreaCharts';
import PieChart from '../PieChart/PieCharts';

const Dashboard = () => {
    return (
        <Container className='mt-5 pt-4'>
            <Row>
                <Col sm={6}>
                  <LineCharts></LineCharts>
                </Col>
                
                <Col sm={6}>
                  <BarCharts></BarCharts>
                </Col>
                <Col sm={6}>
                  <StackedAreaCharts></StackedAreaCharts>
                </Col>
                <Col sm={6}>
                  <PieChart></PieChart>
                </Col>

            </Row>
        </Container>
    );
};

export default Dashboard;