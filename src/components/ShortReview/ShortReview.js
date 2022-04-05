import { Button, Card, Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
const ShortReview = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((data) => data.json())
      .then((data) => setData(data.slice(0, 3)));

    // console.log(data)
  }, [data]);
  return (
    <Container className="text-center my-5 shadow p-5 bg-body rounded">
      <h2 className="my-3 text-secondary pb-5">Customer Reviews</h2>
      <Row xs={1} md={3} className="g-4 mb-4 pb-5">
        {data.map((da) => (
          <Col sm={4} className="my-3 mt-5" key={da.Id}>
            <Card border="secondary" className="h-100">
              <Card.Header className="bg-white border-0">
                <img src={da.image} alt="" />
              </Card.Header>
              <Card.Body className="mt-5">
                <Card.Text className="py-5">{da.comment}</Card.Text>
                <div className="d-flex align-items-center">
                  
                  <span>Rating:</span>
                  <ReactStars
                    classNames="ms-3"
                    count={parseFloat(da.rating)}
                    size={30}
                    isHalf={true}
                    color="#ffd700"
                  ></ReactStars>
                </div>
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
