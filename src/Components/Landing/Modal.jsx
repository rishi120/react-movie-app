import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

const Rendermodal = (props) => {
  const paragraphContent = [
    {
      name: "Imdb Rating",
      movieDesp: props.movieRating,
    },
    {
      name: "Genre",
      movieDesp: props.genre,
    },
    {
      name: "Runtime",
      movieDesp: props.movieRuntime,
    },
    {
      name: "Actors",
      movieDesp: props.actors,
    },
    {
      name: "Director",
      movieDesp: props.movieDirector,
    },
    {
      name: "Plot",
      movieDesp: props.moviePlot,
    },
  ];
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
      centered
      size="lg"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={4}>
            <img src={props.showMoviePoster} className="img-fluid" />
          </Col>
          <Col md={8}>
            <div className="modal-content-wrapper">
              <h1>{props.showMovieTitle}</h1>
              {paragraphContent.map((getParaContent, index) => {
                return (
                  <p key={index}>
                    {getParaContent.name}:
                    <span>{getParaContent.movieDesp}</span>
                  </p>
                );
              })}
            </div>
          </Col>
        </Row>
      </Modal.Body>
      {/* <Modal.Footer></Modal.Footer> */}
    </Modal>
  );
};
export default Rendermodal;
