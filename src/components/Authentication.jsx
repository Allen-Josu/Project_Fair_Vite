/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";
import login from "../assets/login.png";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userLoginAPI, registerUserAPI } from "../services/allApi";

function Authentication({ register }) {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    console.log(userData);
    const registerForm = register ? true : false;

    //function to register user
    const handleRegister = async (e) => {
        e.preventDefault()
        const { username, email, password } = userData
        if (!username || !password || !email) {
            toast.info("Fill the form")
        }
        else {
            const result = await registerUserAPI(userData)
            if (result.status == 200) {
                toast.success(result.data)
                setUserData({
                    username: "",
                    email: "",
                    password: ""
                })
                navigate("/login")
            }
            else {
                toast.error(result.response.data)
            }
        }
    }


    const handleLogin = async (e) => {
        e.preventDefault()
        const { email, password } = userData
        console.log(email, password);

        if (!email || !password) {
            toast.error("Fill the Form")
        }
        else {
            alert("Process")
            const result = await userLoginAPI(userData)
            console.log(result);
        }
    }

    return (
        <>
            <div className="justify-content-center d-flex align-items-center m-5">
                <div className="container w-75">
                    <Link to="/" style={{ color: "#007fff" }}>
                        <i className="fa-solid fa-arrow-right fa-rotate-180 fa-xl"></i>{" "}
                        Back to home
                    </Link>
                    <div
                        className="w-100  d-flex justify-content-center rounded p-5"
                        style={{ background: "#6abe08" }}
                    >
                        <div className="col-lg-6 ms-5">
                            <img src={login} alt="login" width={"90%"} />
                        </div>
                        <div className="col-lg-6 p-3">
                            <h1 className=" text-center text-light">
                                <i className="fa-brands fa-stack-overflow fa-2x pb-4 me-3"></i>
                                Project Fair
                            </h1>
                            <p
                                className="text-center text-light"
                                style={{ fontSize: "18px" }}
                            >
                                {registerForm
                                    ? "Sign up to your Account"
                                    : "  Sign up to your Account"}
                            </p>
                            <div className="d-flex justify-content-center align-items-center">
                                <Form className="mt-5 w-75">
                                    {registerForm && (
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="text"
                                                placeholder="Username"
                                                value={userData.username}
                                                onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                                            />
                                        </Form.Group>
                                    )}
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="email"
                                            placeholder="Email id"
                                            value={userData.email}
                                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={userData.password}
                                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                                        />
                                    </Form.Group>
                                    {registerForm ? (
                                        <div>
                                            <button
                                                onClick={handleRegister}
                                                className="btn rounded mt-3"
                                                style={{
                                                    backgroundColor: "#ffd700",
                                                    color: "black",
                                                }}
                                            >
                                                Register
                                            </button>
                                            <p className="mt-3 text-light">
                                                Already a User ? Click here to{" "}
                                                <Link
                                                    to="/login"
                                                    style={{ color: "#191970" }}
                                                    onClick={handleLogin}
                                                >
                                                    Login
                                                </Link>
                                            </p>
                                        </div>
                                    ) : (
                                        <div>
                                            <button
                                                className="btn  rounded mt-3"
                                                style={{
                                                    backgroundColor: "#ffd700",
                                                    color: "black",
                                                }}
                                            >
                                                Login
                                            </button>
                                            <p className="mt-3 text-light">
                                                New User ? Click here to{" "}
                                                <Link
                                                    to="/register"
                                                    style={{ color: "#191970" }}
                                                >
                                                    Register
                                                </Link>
                                            </p>
                                        </div>
                                    )}
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer theme="colored" position="top-center" autoClose={2000} />
        </>
    )
}

export default Authentication