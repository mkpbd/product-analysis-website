import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-5 pt-5">
      <Row>
        <Col className="px-5 bg-light py-3">
          <p>
            If you have never tried it, let me tell you, flying a drone around
            is not only lots of fun, it's even more enjoyable when you can use a
            drone camera to take photos or video of a point of view that was
            once limited to pilots and birds. The cameras, wireless networking
            gear and lithium-ion batteries needed to take drone photos and
            videos have evolved greatly in recent years. Now, you can get a
            great drone with a camera that will pilot itself, fly for 30 minutes
            (or more) and shoot 4K video for less than $500.
          </p>

          <p>
            And even a budget drone for beginners can offer plenty of fun. For
            about $50 (about £40 or AU$80), you can get a basic quadcopter drone
            with an integrated camera that can fly for nearly 10 minutes on a
            charge. But there are plenty of affordable options for drone owners
            that fall somewhere in the middle, offering various combinations of
            features, video quality and price for every drone enthusiast. So,
            whether you're looking to get into drone photography or just want an
            indoor drone to fly around your living room, we've got some
            recommendations. Here are the best drones for the beginner and
            intermediate drone pilot looking to spend less than $1,000.
          </p>

          <p>
            DJI is the undisputed leader in drone technology and dominates the
            market, thanks to a vast lineup of cheaper drone models (such as the
            Mavic, Mini, Tello and Phantom) for consumers, hobbyists and
            professionals that start at around $100 and go up to expensive drone
            models that exceed $20,000. (In December 2020, the US Commerce
            Department added the company to its Entity List, which restricts
            companies from exporting US technology without a license, but which
            is not not expected to impact product availability.) And there are
            other reputable brands making high-quality consumer quadcopters,
            including Parrot and Skydio, as well as countless upstarts making
            inexpensive drones you can buy at Walmart, Amazon and Best Buy. You
            can even get a mini drone or drones with autonomous flight or
            intelligent flight modes if the fancy so strikes you.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
