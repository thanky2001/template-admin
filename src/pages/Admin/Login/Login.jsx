import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="account-page">
                <div className="container">
                    <h3 className="account-title">Login</h3>
                    <div className="account-box">
                        <div className="account-wrapper">
                            <div className="account-logo">
                                <a href="index-2.html"><img src="../assets/img/logo2.png" alt="Preadmin" /></a>
                            </div>
                            <form action="/admin">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Username or Email</label>
                                    <input className="form-control floating" type="text" />
                                </div>
                                <div className="form-group form-focus">
                                    <label className="focus-label">Password</label>
                                    <input className="form-control floating" type="password" />
                                </div>
                                <div className="form-group text-center">
                                    <button className="btn btn-primary btn-block account-btn" type="submit">Login</button>
                                </div>
                                <div className="text-center">
                                    <a href="forgot-password.html">Forgot your password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
