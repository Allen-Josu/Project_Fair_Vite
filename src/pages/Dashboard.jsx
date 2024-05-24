import Header from "../components/Header";
import MyProject from "../components/MyProject";
import { Col, Row } from "react-bootstrap";
import Profile from "../components/Profile";

function Dashboard() {
    return (
        <>
            <Header dashboard />

            <h3 className="ms-5 mt-4">
                Welcome <span style={{ color: "orange" }}>User</span>{" "}
            </h3>
            <Row className="m-4">
                <Col md={8}>
                    <MyProject />
                </Col>
                <Col md={4}>
                    <Profile />
                </Col>
            </Row>
        </>
    )
}

export default Dashboard