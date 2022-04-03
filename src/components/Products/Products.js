
import React from 'react';
import { Col, Container, Row ,Button} from 'react-bootstrap';

const Products = () => {
    return (
        <div>
            <Container  className='px-auto mx-auto'>
                <Row>
                    <Col className='col-sm-6'>
                       <img src={'./images/drone-1.webp'} alt="" />
                    </Col>
                    <Col className='col-sm-6'>
                        <h1> <span className='text-primary'>
                        Collaborative Autonomy, Swarming Advancing in
                            </span>  <br></br> Next Generation Military Drone Systems</h1>

                            <p>
                            The field of unmanned combat aerial vehicles (UCAVs) is rapidly diversifying as an array of light, mid-sized, and heavy UCAVs and munitions enter the global marketplace.
                            </p>

                            <Button variant="secondary">Secondary</Button>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Products;