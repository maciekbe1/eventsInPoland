import React, { useContext, useEffect } from 'react';
// import Cookies from 'universal-cookie';
import sha256 from 'js-sha256';
// import axios from "axios"
import { getToken } from '../../api/api'

import Context from "../../context";

const Signin = (props) => {
    
    const { dispatch } = useContext(Context);
    const context = useContext(Context);
    useEffect(()=> {
        const token  = sessionStorage.getItem('gwtoken');
        const login  = sessionStorage.getItem('gwlog');
        
        if (token) {
            const objToken = JSON.parse(window.atob(token));

            if (Date.parse(objToken.expTime) < new Date().getTime()) {
                getToken(objToken.data).then(() => {
                    dispatch({ type: "IS_AUTH", payload: true })
                    dispatch({ type: "CURRENT_USER", payload: login })

                    let expDate = new Date();
                    expDate.setTime(expDate.getTime() + (15 * 60 * 1000));
                    const tokenData = {
                        data: objToken.data,
                        expTime: expDate
                    };

                    const newToken = window.btoa(JSON.stringify(tokenData));
                    sessionStorage.setItem('gwtoken', newToken);
                })
                    .catch(error => {
                        console.log(error);
                    })
            } else if (Date.parse(objToken.expTime) > new Date().getTime()) {
                dispatch({ type: "IS_AUTH", payload: true })
                dispatch({ type: "CURRENT_USER", payload: login })
            }
        }
    },[])
    const onLoginHandle = login => {
        dispatch({ type: "LOGIN", payload: login })
    }
    const onPasswordHandle = password => {
        dispatch({ type: "PASSWORD", payload: sha256(password) })
    }
    
    const onSignIn = () => {
        try {
            let userData = window.btoa(`${context.state.login}:${context.state.password}`);
            
            dispatch({type: "IS_LOADING", payload: true})

            getToken(userData).then(response => {
                dispatch({ 
                    type: "SIGNIN_USER", 
                    payload: {
                        token: response.data.token,
                        isAuth: true, 
                        currentUser: context.state.login,
                    } 
                })
                dispatch({type: "IS_LOADING", payload: false})

                let expDate = new Date();

                expDate.setTime(expDate.getTime() + (15 * 60 * 1000));

                const tokenData = {
                    data: userData,
                    expTime: expDate
                };

                const token = window.btoa(JSON.stringify(tokenData));

                sessionStorage.setItem('gwtoken', token);
                sessionStorage.setItem('gwlog', context.state.login);
                document.querySelector('#closeLoginModal').click();
                document.querySelector('#login').value = '';
                document.querySelector('#password').value = '';

            }).catch(error => {
                console.log(error);
                dispatch({ type: "LOGIN_FAILURE", payload: true })
                dispatch({type: "IS_LOADING", payload: false})
            })
        } catch (err) {
            onFailure(err)
        }
    }
    const onFailure = err => {
        console.error('Error logging', err);
    }
    
    return (
        <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="loginModalLabel">Login panel</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form id="signInModal" onKeyPress={e => e.key === 'Enter' ? onSignIn() : null}>
                        <div className="form-group">
                            <label htmlFor="recipient-name" className="col-form-label">Login:</label>
                            <input type="text" className="form-control" id="login" onChange={(e) => onLoginHandle(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="recipient-name" className="col-form-label">Password:</label>
                            <input type="password" className="form-control" id="password" onChange={(e) => onPasswordHandle(e.target.value)} />
                        </div>
                    </form>
                    {context.state.loginFailure ? <div className="text-danger">Wrong login or password!</div> : null}
                </div>
                <div className="modal-footer">
                    <button id="closeLoginModal" type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={onSignIn}>
                        {context.state.loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Sign in'}
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;