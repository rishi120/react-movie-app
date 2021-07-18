import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import movieIcon from "../../assets/images/movie-icon.svg";

export const Renderappheader = (props) => {
  return (
    <header>
      <Row>
        <Col md={5}>
          <div className="heading-wrapper">
            <img src={movieIcon} />
            <h1>React Movie App</h1>
          </div>
        </Col>
        <Col md={7}>
          <div className="search-input-wrapper">
            <Form onSubmit={props.handleFormSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Search movie"
                  required
                  onChange={(e) => props.handleInputValue(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </header>
  );
};
