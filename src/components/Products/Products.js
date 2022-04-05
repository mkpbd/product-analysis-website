
import React from 'react';
import { Col, Container, Row ,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Demo from '../Demo/Demo';
import ShortReview from '../ShortReview/ShortReview';

const Products = () => {
    let navigate = useNavigate();
    return (
        <div>
            <Container  className='px-auto mx-auto my-5'>
                <Row className='shadow p-5 bg-body rounded'>
                    <Col className='col-sm-6'>
                       <img src={'./images/drone-1.webp'} alt="" className='img-fluid'/>
                    </Col>
                    <Col className='col-sm-6'>
                       <div className='d-flex flex-column justify-content-center h-100'>
                       <h1> <span className='text-primary'>
                        Collaborative Autonomy, Swarming Advancing in
                            </span>  <br></br> Next Generation Military Drone Systems</h1>

                            <p className='my-3'>
                            There is an expansion of munitions being equipped on military drones and different munitions are being tested on drones,” Gettinger says. “For a long time, we had the archetypal Predator drone, but the field of armed drones has diversified to include smaller and larger aircraft, so the family of munitions has also diversified. We see more variety in the types of munitions on them; we’ll see further automation demonstrated in the loitering munitions
                            </p>

                           
                                <Demo></Demo>
                            
                            
                       </div>

                    </Col>


                </Row>

                <Row>
                    <Col>
                        <ShortReview></ShortReview>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Products;