/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header({dashboard}) {
    return (
        <>
            <Navbar style={{ background: "#6abe08", height: "100px" }}>
                <Container>
                    <Navbar.Brand href="/">
                        <div className="d-flex align-items-center justify-content-center text-light">
                            <i className="fa-brands fa-stack-overflow fa-2x pb-4"></i>
                            <h3 className="ms-3 text-light ">Project Fair</h3>
                        </div>
                    </Navbar.Brand>
                    {dashboard && (
                        <button className="btn btn-warning align-items-center d-flex">
                            Logout{" "}
                            <i className="fa-solid fa-power-off ms-1 fa-sm"></i>
                        </button>
                    )}
                </Container>
            </Navbar>
        </>
    )
}

export default Header