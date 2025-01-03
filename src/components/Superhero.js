import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
  return (
    <div>
      <br />
      <br />
      <Container>
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="bg-dark text-white movieImage">
              <Image src={antmanImage} alt="Dune Movies" className="images" />

              <Card.Title className="text-center p-2 m-1">ANT MAN</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={avengerImage} alt="Dune Movies" className="images" />

              <Card.Title className="text-center p-2 m-1">AVENGER</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={batmanImage} alt="Dune Movies" className="images" />

              <Card.Title className="text-center p-2 m-1">BATMAN</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image
                src={robinhoodImage}
                alt="Dune Movies"
                className="images"
              />

              <Card.Title className="text-center p-2 m-1">
                ROBIN HOOD
              </Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image
                src={spidermanImage}
                alt="Dune Movies"
                className="images"
              />

              <Card.Title className="text-center p-2 m-1">SPIDERMAN</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={supermanImage} alt="Dune Movies" className="images" />

              <Card.Title className="text-center p-2 m-1">SUPERMAN</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
