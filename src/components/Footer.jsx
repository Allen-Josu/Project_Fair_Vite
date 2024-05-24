import { Link } from "react-router-dom";

import { Col, Row } from "react-bootstrap";

function Footer() {
    return (
        <>
            <Row style={{ background: "#6abe08" }} className="py-5 px-3 " >
                <Col md={1}></Col>
                <Col md={3} className="d-flex flex-column justify-content-center mt-1">
                    <div className="d-flex ">
                        <i className="fa-brands fa-stack-overflow fa-2x"></i>
                        <h3 className="ms-3 text-light">Project Fair</h3>
                    </div>
                    <div className="mt-2">
                        <p style={{ color: "white", textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia voluptas natus dignissimos animi eum non reiciendis reprehenderit inventore ullam maiores dolore repellendus sapiente amet iste, odit, eligendi id ipsum.</p>
                    </div>
                </Col>
                <Col md={2} className="d-flex flex-column mt-1" >
                    <h3 className="text-light">PRODUCTS</h3>
                    <Link to="https://angular.io/docs" target="_blank" style={{ textDecoration: "none", fontSize: "18px", color: "white", }}>
                        Angular
                    </Link>
                    <Link to="https://react.dev/learn" target="_blank" style={{ textDecoration: "none", fontSize: "18px", color: "white" }}>
                        React
                    </Link>
                    <Link to="https://react-bootstrap.netlify.app/docs/getting-started/introduction" target="_blank" style={{ textDecoration: "none", fontSize: "18px", color: "white", }} >
                        Bootstrap
                    </Link>
                </Col>
                <Col md={2} className="d-flex flex-column  mt-1">
                    <h3 className="text-light ">LINKS</h3>
                    <Link to="/project" style={{ textDecoration: "none", fontSize: "18px", color: "white", }}>
                        Projects
                    </Link>
                    <Link to="login" style={{ textDecoration: "none", fontSize: "18px", color: "white", }}>
                        Login
                    </Link>
                    <Link to="register" style={{ textDecoration: "none", fontSize: "18px", color: "white", }}>
                        Register
                    </Link>
                    <Link to="dashboard" style={{ textDecoration: "none", fontSize: "18px", color: "white", }}>
                        Dashboard
                    </Link>
                </Col>
                <Col md={2} className="d-flex flex-column text-light mt-1">
                    <h3 className="text-light">CONTACT</h3>
                    <p>email : projectfair@gmail.com</p>
                    <p>phone : 91 9497831393</p>
                </Col>
            </Row>
        </>
    );
}

export default Footer