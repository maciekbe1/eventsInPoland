import React from 'react';
import sha256 from 'js-sha256';
import { getToken } from '../../api/api'
import AuthContext from './auth-context'
import axios from 'axios'

class AuthProvider extends React.Component {
    state = {
        isAuth: false,
        login: null,
        password: null,
        token: null,
        wrongData: false,
        loading: false,
        phpSession: null
    };

    componentWillMount() {
        const token  = sessionStorage.getItem('gwtoken');
        const login  = sessionStorage.getItem('gwlog');

        this.setState({login});

        if (token) {
            const objToken = JSON.parse(window.atob(token));

            if (Date.parse(objToken.expTime) < new Date().getTime()) {
                getToken(objToken.data).then(() => {
                    this.setState({
                        isAuth: true
                    });

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
                this.setState({
                    isAuth: true
                })
            }
        }
    }

    onSignInHandle = () => {
        let userData = window.btoa(`${this.state.login}:${this.state.password}`);
        this.setState({loading: true})
        getToken(userData).then( response => {
            // console.log(response);
            this.setState({
                token: response.data.token,
                wrongData: false,
                isAuth: true,
                loading: false
            });

            let expDate = new Date();

            expDate.setTime(expDate.getTime() + (15 * 60 * 1000));

            const tokenData = {
                data: userData,
                expTime: expDate
            };

            const token = window.btoa(JSON.stringify(tokenData));

            sessionStorage.setItem('gwtoken', token);
            sessionStorage.setItem('gwlog', this.state.login);
            document.querySelector('#closeLoginModal').click();
            document.querySelector('#login').value = '';
            document.querySelector('#password').value = '';

            const formData = new FormData();

            formData.append('LoginForm[username]', this.state.login);
            formData.append('LoginForm[password]', this.state.phpSession);
            formData.append('LoginForm[rememberMe]', 0);

            axios({
                method: 'post',
                url: 'https://qang.bpower2.com/index.php/site/login',
                data: formData,
                config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });


        }).catch(error => {
            console.log(error);
            this.setState({
                wrongData: true,
                loading: false
            })
        })
    };

    onLoginHandle = (data) => {
        this.setState({login: data})
    };

    onPasswordHandle = (data) => {
        let password = sha256(data);
        this.setState({
            password: password,
            phpSession: data
        })
    };

    onSignOut = (e) => {
        // console.log('ok');

        this.setState({
            login: null,
            password: null,
            token: null,
            isAuth: false
        });
        sessionStorage.removeItem('gwtoken');
        sessionStorage.removeItem('gwlog');

        axios({
            method: 'post',
            url: 'https://qang.bpower2.com/site/logout',
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    };

    render() {
        return (
            <AuthContext.Provider
                value={{
                    isAuth: this.state.isAuth,
                    login: this.onLoginHandle,
                    password: this.onPasswordHandle,
                    signIn: this.onSignInHandle,
                    signOut: this.onSignOut,
                    alert: this.state.wrongData,
                    name: this.state.login,
                    loading: this.state.loading
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthProvider;