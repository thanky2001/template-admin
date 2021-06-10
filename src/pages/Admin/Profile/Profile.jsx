import React, { Component } from 'react';
import InforUser from './InforUser';
export default class Profile extends Component {
    render() {
        return (
            <div>
                <InforUser />
                <div className="row">
                    <div className="col-md-3">
                        <div className="card-box">
                            <h3 className="card-title">Skills</h3>
                            <div className="skills">
                                <span>IOS</span>
                                <span>Android</span>
                                <span>Html</span>
                                <span>CSS</span>
                                <span>Codignitor</span>
                                <span>Php</span>
                                <span>Javascript</span>
                                <span>Wordpress</span>
                                <span>Jquery</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card-box">
                            <h3 className="card-title">Education Informations</h3>
                            <div className="experience-box">
                                <ul className="experience-list">
                                    <li>
                                        <div className="experience-user">
                                            <div className="before-circle" />
                                        </div>
                                        <div className="experience-content">
                                            <div className="timeline-content">
                                                <a href="#/" className="name">International College of Arts and Science (UG)</a>
                                                <div>Bsc Computer Science</div>
                                                <span className="time">2000 - 2003</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="experience-user">
                                            <div className="before-circle" />
                                        </div>
                                        <div className="experience-content">
                                            <div className="timeline-content">
                                                <a href="#/" className="name">International College of Arts and Science (PG)</a>
                                                <div>Msc Computer Science</div>
                                                <span className="time">2000 - 2003</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-box m-b-0">
                            <h3 className="card-title">Experience</h3>
                            <div className="experience-box">
                                <ul className="experience-list">
                                    <li>
                                        <div className="experience-user">
                                            <div className="before-circle" />
                                        </div>
                                        <div className="experience-content">
                                            <div className="timeline-content">
                                                <a href="#/" className="name">Web Designer at Zen Corporation</a>
                                                <span className="time">Jan 2013 - Present (5 years 2 months)</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="experience-user">
                                            <div className="before-circle" />
                                        </div>
                                        <div className="experience-content">
                                            <div className="timeline-content">
                                                <a href="#/" className="name">Web Designer at Ron-tech</a>
                                                <span className="time">Jan 2013 - Present (5 years 2 months)</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="experience-user">
                                            <div className="before-circle" />
                                        </div>
                                        <div className="experience-content">
                                            <div className="timeline-content">
                                                <a href="#/" className="name">Web Designer at Dalt Technology</a>
                                                <span className="time">Jan 2013 - Present (5 years 2 months)</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
