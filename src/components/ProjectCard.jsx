import { useState } from "react";
import Card from "react-bootstrap/Card";
import ProjectImages from "../assets/project1.png";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";

function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card
                className="shadow text-center"
                style={{ width: "100%" }}
                onClick={handleShow}
            >
                <Card.Img variant="top" src={ProjectImages} />
                <Card.Body>
                    <Card.Title>Vedio Player</Card.Title>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Vedio Player</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <img
                                src={ProjectImages}
                                width={"100%"}
                                height={"250px"}
                                alt="no-image"
                            />
                        </Col>
                        <Col md={6}>
                            <h4>Discription</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Eligendi explicabo assumenda
                                vitae minima neque nemo sint exercitationem enim
                                molestiae consectetur nisi, possimus quo,
                                praesentium odit porro ea consequatur rem earum.
                            </p>
                            <span className="fw-borderr">Technologies</span>:
                            HTML,CSS,React
                        </Col>
                    </Row>
                    <div className="d-flex mt-4">
                        <a
                            href="https://github.com/Allen-Josu/Project-Fair"
                            target="_blank"
                            style={{ color: "black" }}
                        >
                            <i className="fa-brands fa-github fa-2x ms-4"></i>
                        </a>
                        <a href="" target="_blank" style={{ color: "black" }}>
                            <i className="fa-solid fa-link fa-2x ms-4"></i>{" "}
                        </a>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProjectCard;