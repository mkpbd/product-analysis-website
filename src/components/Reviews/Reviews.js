import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './Reviews.css';

const Reviews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Container className="my-3 pt-5">
         <h2 className="text-center">What our Customers say!</h2>
      <Row xs={1} md={2} className="g-4">
       
        {data.map((da) => (
          <Col sm={6} className='my-3 mt-5' key={da.Id}>
            <Card border="primary" className="h-100">
              <Card.Header>
                  <img src={da.image} alt="" />
              </Card.Header>
              <Card.Body className="mt-5">
               
                <Card.Text>
                 {da.comment}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {}
    </Container>
  );
};

export default Reviews;
