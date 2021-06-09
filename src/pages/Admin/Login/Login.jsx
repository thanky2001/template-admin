import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div className="account-page">
                <div className="container">
                    <h3 className="account-title">Login</h3>
                    <div className="account-box">
                        <div className="account-wrapper">
                            <div className="account-logo">
                                <Link to="/admin"><img src="../assets/img/logo2.png" alt="Preadmin" /></Link>
                            </div>
                            <form >
                                <div className="form-group form-focus">
                                    <label className="focus-label">Username or Email</label>
                                    <input className="form-control floating" type="text" />
                                </div>
                                <div className="form-group form-focus">
                                    <label className="focus-label">Password</label>
                                    <input className="form-control floating" type="password" />
                                </div>
                                <div className="form-group text-center">
                                    <button className="btn btn-primary btn-block account-btn" >Login</button>
                                </div>
                                <div className="text-center">
                                    <Link to="/admin/forgot-password">Forgot your password?</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
