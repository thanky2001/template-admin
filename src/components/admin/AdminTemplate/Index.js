import React, { Component } from 'react'
import MessagesList from '../../../pages/Admin/Components/MessagesList'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import LeftNav from '../LeftNav/LeftNav'

export default class index extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <Header/>
                <LeftNav />
                <div className="page-wrapper">
                    <div className="content container-fluid">
                        {this.props.children}
                    </div>
                    <MessagesList />
                </div>
                <div className="sidebar-overlay" data-reff />
                <Footer/>
            </div>
        )
    }
}
