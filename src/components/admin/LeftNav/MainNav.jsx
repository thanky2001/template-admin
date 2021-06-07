import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
        }
    }
    showDropdown = (e) => {
        e.preventDefault();
        let isShow = this.state.isShow;
        e.currentTarget.className = isShow ? "subdrop" : "";
        e.currentTarget.nextElementSibling.style.display = isShow ? "block" : "none";
        this.setState({ isShow: !isShow });
    }
    render() {
        return (
            <ul>
                <li className="menu-title">Main</li>
                <li>
                    <NavLink exact to="/admin" activeClassName="active"><i className="fas fa-tachometer-alt" /> Dashboard </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/chat" activeClassName="active"><i className="fa fa-comments" aria-hidden="true" /> Chat <span className="badge badge-pill bg-primary float-right">5</span></NavLink>
                </li>
                <li className="submenu">
                    <a onClick={this.showDropdown} href="#"><i className="fas fa-video" /> <span> Calls</span> <span className="menu-arrow" /></a>
                    <ul className="list-unstyled" style={{ display: 'none' }}>
                        <li><NavLink activeClassName="active" to="/admin/voice-call">Voice Call</NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/video-call">Video Call</NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/incoming-call">Incoming Call</NavLink></li>
                    </ul>
                </li>
                <li className="submenu">
                    <a onClick={this.showDropdown} href="#"><i className="fa fa-envelope" aria-hidden="true" /> <span> Email</span> <span className="menu-arrow" /></a>
                    <ul className="list-unstyled" style={{ display: 'none' }}>
                        <li><NavLink activeClassName="active" to="/admin/compose">Compose Mail</NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/inbox">Inbox</NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/mail-view">Mail View</NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/contacts"><i className="fa fa-address-card" aria-hidden="true" /> Contacts</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/tasks"><i className="fa fa-tasks" aria-hidden="true" /> Tasks</NavLink>
                </li>
                <li className="submenu">
                    <a onClick={this.showDropdown} href="#"><i className="far fa-comment-dots" /> <span> Blog</span> <span className="menu-arrow" /></a>
                    <ul className="list-unstyled" style={{ display: 'none' }}>
                        <li><NavLink activeClassName="active" to="/admin/blog">Blog</NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/blog-details">Blog View</NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/add-blog">Add Blog</NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/edit-blog">Edit Blog</NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/admin/tickets"><i className="fas fa-ticket-alt" /> Tickets </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/settings"><i className="fa fa-cog" aria-hidden="true" /> Settings</NavLink>
                </li>
            </ul>

        )
    }
}
