import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Reviews.css";
import ReactStars from "react-rating-stars-component";


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
          <Col sm={6} className="my-3 mt-5" key={da.Id}>
            <Card border="secondary" className="h-100">
              <Card.Header className="bg-white border-0">
                <img src={da.image} alt="" />
              </Card.Header>
              <Card.Body className="mt-5">
                <Card.Text>{da.comment}</Card.Text>
                <div className="d-flex align-items-center"> <span>
                Rating: 
                </span>
                <ReactStars classNames='ms-3' count={parseFloat(da.rating)}   size={30}
    isHalf={true} color="#ffd700"></ReactStars>
                </div>
       
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
