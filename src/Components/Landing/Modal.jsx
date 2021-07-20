import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import noPoster from "../../assets/images/no-poster-available.jpg";

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
      name: "Release Date",
      movieDesp: props.movieRelease,
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
            {props.showMoviePoster === "N/A" ? (
              <img src={noPoster} className="img-fluid" />
            ) : (
              <img src={props.showMoviePoster} className="img-fluid" />
            )}
          </Col>
          <Col md={8}>
            <div className="modal-content-wrapper">
              <h1>{props.showMovieTitle}</h1>
              {props.loader && <p>Loading...</p>}
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
