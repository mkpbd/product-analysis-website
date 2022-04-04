import { Button, Card, Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShortReview = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((data) => data.json())
      .then((data) => setData(data.slice(0, 3)));

     // console.log(data)
  }, [data]);
  return (
    <Container className="text-center my-5">
      <h2>Customer Reviews</h2>
      <Row xs={1} md={2} className="g-4 mb-4 pb-5">
      {data.map((da) => (
          <Col sm={6} className="my-3 mt-5" key={da.Id}>
            <Card border="secondary" className="h-100">
              <Card.Header className="bg-white border-0">
                <img src={da.image} alt="" />
              </Card.Header>
              <Card.Body className="mt-5">
                <Card.Text>{da.comment}</Card.Text>
                <p>Rating: {da.rating}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}

      
      </Row>
      <Link to="/reviews">
          <Button>See all Reviews</Button>
        </Link>
    </Container>
  );
};

export default ShortReview;
