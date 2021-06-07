import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ChatsNav extends Component {
    render() {
        return (
            <ul>
                <li>
                    <NavLink exact to="/admin"><i className="fa fa-home back-icon" /> Back to Home</NavLink>
                </li>
                <li className="menu-title">Chat Groups <a href="#" className="add-user-icon" data-toggle="modal" data-target="#add_group"><i className="fa fa-plus" /></a></li>
                <li>
                    <a href="chat.html">#General</a>
                </li>
                <li>
                    <a href="chat.html">#Video Responsive Survey</a>
                </li>
                <li>
                    <a href="chat.html">#500rs</a>
                </li>
                <li>
                    <a href="chat.html">#warehouse</a>
                </li>
                <li className="menu-title">Direct Chats <a href="#" className="add-user-icon" data-toggle="modal" data-target="#add_chat_user"><i className="fa fa-plus" /></a></li>
                <li>
                    <a href="chat.html"><span className="chat-avatar-sm user-img"><img src="assets/img/user.jpg" alt="user" className="rounded-circle" /><span className="status online" /></span> John
      Doe <span className="badge badge-pill bg-danger float-right">1</span></a>
                </li>
                <li>
                    <a href="chat.html"><span className="chat-avatar-sm user-img"><img src="assets/img/user.jpg" alt="user" className="rounded-circle" /><span className="status offline" /></span>
      Richard Miles <span className="badge badge-pill bg-danger float-right">18</span></a>
                </li>
                <li>
                    <a href="chat.html"><span className="chat-avatar-sm user-img"><img src="assets/img/user.jpg" alt="user" className="rounded-circle" /><span className="status away" /></span> John
      Smith</a>
                </li>
                <li>
                    <a href="chat.html"><span className="chat-avatar-sm user-img"><img src="assets/img/user.jpg" alt="user" className="rounded-circle" /><span className="status online" /></span> Mike
      Litorus <span className="badge badge-pill bg-danger float-right">108</span></a>
                </li>
            </ul>

        )
    }
}
