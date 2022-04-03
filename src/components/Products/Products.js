
import React from 'react';
import { Col, Container, Row ,Button} from 'react-bootstrap';

const Products = () => {
    return (
        <div>
            <Container  className='px-auto mx-auto my-5'>
                <Row>
                    <Col className='col-sm-6'>
                       <img src={'./images/drone-1.webp'} alt="" />
                    </Col>
                    <Col className='col-sm-6'>
                        <h1> <span className='text-primary'>
                        Collaborative Autonomy, Swarming Advancing in
                            </span>  <br></br> Next Generation Military Drone Systems</h1>

                            <p>
                            There is an expansion of munitions being equipped on military drones and different munitions are being tested on drones,” Gettinger says. “For a long time, we had the archetypal Predator drone, but the field of armed drones has diversified to include smaller and larger aircraft, so the family of munitions has also diversified. We see more variety in the types of munitions on them; we’ll see further automation demonstrated in the loitering munitions
                            </p>

                            <Button variant="secondary">Secondary</Button>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Products;