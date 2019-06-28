import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { sha256 } from "js-sha256";

import success from "../assets/images/checked.png";
import "../assets/styles/registerpage.scss";

import Input from "../components/Skeletons/Input";

const RegisterPage = props => {
    const [postMessage, setPostMessage] = useState({});
    const [sent, setSent] = useState(false);
    const [values, setValues] = useState({
        login: "",
        email: "",
        password: "",
        passwordRepeat: ""
    });
    const onChange = (name, value) => setValues({ ...values, [name]: value });
    const handlePasswordError = values => {
        if (values.password.length !== 0) {
            if (values.password !== values.passwordRepeat) {
                return (
                    <div className="text-danger">
                        <p>password is not compatible</p>
                    </div>
                );
            } else {
                return null;
            }
        }
    };
    const handleEmailError = () => {
        if ("email" in postMessage) {
            return (
                <div className="text-danger">
                    <p>{postMessage.email}</p>
                </div>
            );
        }
    };
    const handleLoginError = () => {
        if ("login" in postMessage) {
            return (
                <div className="text-danger">
                    <p>{postMessage.login}</p>
                </div>
            );
        }
    };
    const handleSubmit = (event, values) => {
        event.preventDefault();
        const password = sha256(values.password);
        const passwordRepeat = sha256(values.passwordRepeat);
        if (password === passwordRepeat) {
            axios({
                method: "post",
                url:
                    "https://b2ng.bpower2.com/index.php/site/register?group=29bf94d1f95c2c7ffa010f2d3c0477f0",
                headers: {
                    "X-PINGOTHER": "pingpong",
                    "Content-Type": "application/json"
                },
                data: {
                    user: {
                        login: values.login,
                        password: password,
                        password_repeat: passwordRepeat,
                        email: values.email
                    },
                    userInfo: {}
                }
            })
                .then(function(response) {
                    if (response.data.code === 200) {
                        setSent(true);
                    } else {
                        setPostMessage(response.data.message);
                    }
                })
                .catch(errors => console.log(errors));
        } else {
            console.log("passwords is not valid");
        }
    };
    return (
        <div className="container register-page">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-2">
                    <div className="container d-flex flex-wrap">
                        <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li
                            className="breadcrumb-item active"
                            aria-current="page"
                        >
                            Register
                        </li>
                    </div>
                </ol>
            </nav>
            <h1 className="text-center">Create your personal account</h1>
            <div className="row justify-content-center">
                {!sent ? (
                    <form
                        className="col-lg-6"
                        onSubmit={event => handleSubmit(event, values)}
                    >
                        <div className="form-group">
                            <label>Login</label>
                            <Input
                                name="login"
                                placeholder=""
                                type="login"
                                value={values.login}
                                onChange={onChange}
                                className="form-control"
                            />
                            {"login" in postMessage ? handleLoginError() : null}
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <Input
                                name="email"
                                placeholder=""
                                type="email"
                                value={values.email}
                                onChange={onChange}
                                className="form-control"
                                required
                            />
                            {"email" in postMessage ? handleEmailError() : null}
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <Input
                                name="password"
                                placeholder=""
                                type="password"
                                value={values.password}
                                onChange={onChange}
                                className="form-control"
                                required
                            />
                            {handlePasswordError(values)}
                        </div>
                        <div className="form-group">
                            <label>Repeat password</label>
                            <Input
                                name="passwordRepeat"
                                placeholder=""
                                type="password"
                                value={values.passwordRepeat}
                                onChange={onChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <button type="submit">Send</button>
                    </form>
                ) : (
                    <div className="d-flex justify-content-center align-items-center flex-column register-success">
                        <h2 className="text-success">Congratulation!</h2>
                        <img
                            alt="success"
                            className="register-success-image"
                            src={success}
                        />
                        <h4>You have been successfully registered.</h4>
                        <h3 className="text-center">
                            Please check your registered Email for email
                            verification.
                        </h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegisterPage;
