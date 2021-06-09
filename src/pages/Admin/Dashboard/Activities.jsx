import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Activities extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="card activity-panel">
                    <div className="card-body">
                        <h4 className="card-title">Activities</h4>
                        <div className="activity-box">
                            <ul className="activity-list">
                                <li>
                                    <div className="activity-user">
                                        <Link to="/admin/profile" title="Lesley Grauer" data-toggle="tooltip" className="avatar">
                                            <img alt="Lesley Grauer" src="../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                        </Link>
                                    </div>
                                    <div className="activity-content">
                                        <div className="timeline-content">
                                            <Link to="/admin/profile" className="name">Lesley Grauer</Link> added new task
                                            <a href="#">Hospital Administration</a>
                                            <span className="time">4 mins ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="activity-user">
                                        <a href="profile.html" className="avatar" title="Jeffery Lalor" data-toggle="tooltip">L</a>
                                    </div>
                                    <div className="activity-content">
                                        <div className="timeline-content">
                                            <a href="profile.html" className="name">Jeffery Lalor</a> added <a href="profile.html" className="name">Loren Gatlin</a> and <a href="profile.html" className="name">Tarah Shropshire</a> to project
                                            <a href="#">Patient appointment booking</a>
                                            <span className="time">6 mins ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="activity-user">
                                        <a href="profile.html" title="Catherine Manseau" data-toggle="tooltip" className="avatar">
                                            <img alt="Catherine Manseau" src="../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                        </a>
                                    </div>
                                    <div className="activity-content">
                                        <div className="timeline-content">
                                            <a href="profile.html" className="name">Catherine Manseau</a> completed
                                            task <a href="#">Appointment booking with payment gateway</a>
                                            <span className="time">12 mins ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="activity-user">
                                        <a href="#" title="Bernardo Galaviz" data-toggle="tooltip" className="avatar">
                                            <img alt="Bernardo Galaviz" src="../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                        </a>
                                    </div>
                                    <div className="activity-content">
                                        <div className="timeline-content">
                                            <a href="profile.html" className="name">Bernardo Galaviz</a> changed the
                                            task name <a href="#">Doctor available module</a>
                                            <span className="time">1 day ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="activity-user">
                                        <a href="profile.html" title="Mike Litorus" data-toggle="tooltip" className="avatar">
                                            <img alt="Mike Litorus" src="../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                        </a>
                                    </div>
                                    <div className="activity-content">
                                        <div className="timeline-content">
                                            <a href="profile.html" className="name">Mike Litorus</a> added new task
                                            <a href="#">Patient and Doctor video conferencing</a>
                                            <span className="time">2 days ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="activity-user">
                                        <a href="profile.html" title="Jeffery Lalor" data-toggle="tooltip" className="avatar">
                                            <img alt="Jeffery Lalor" src="../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                        </a>
                                    </div>
                                    <div className="activity-content">
                                        <div className="timeline-content">
                                            <a href="profile.html" className="name">Jeffery Lalor</a> added <a href="profile.html" className="name">Jeffrey Warden</a> and <a href="profile.html" className="name">Bernardo Galaviz</a> to the
                                            task of <a href="#">Private chat module</a>
                                            <span className="time">7 days ago</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-footer text-center bg-white">
                        <Link to="/admin/activities" className="text-muted">View all activities</Link>
                    </div>
                </div>
            </div>

        )
    }
}
