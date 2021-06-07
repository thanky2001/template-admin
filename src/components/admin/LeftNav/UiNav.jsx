import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class UiNav extends Component {
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
                <li className="menu-title">UI Elements</li>
                <li className="submenu">
                    <a onClick={this.showDropdown} href="#"><i className="fa fa-laptop" aria-hidden="true" /> <span> Components</span> <span className="menu-arrow" /></a>
                    <ul className="list-unstyled" style={{ display: 'none' }}>
                        <li><NavLink activeClassName="active" to="/admin/uikit">UI Kit</NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/typography">Typography</NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/tabs">Tabs</NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/widgets"><i className="fa fa-th" aria-hidden="true" /> Widgets</NavLink>
                </li>
                <li className="submenu">
                    <a onClick={this.showDropdown} href="#"><i className="fa fa-edit" aria-hidden="true" /> <span> Forms</span> <span className="menu-arrow" /></a>
                    <ul className="list-unstyled" style={{ display: 'none' }}>
                        <li><NavLink activeClassName="active" to="/admin/form-basic-inputs">Basic Inputs</NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/form-input-groups">Input Groups</NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/form-horizontal">Horizontal Form</NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/form-vertical">Vertical Form</NavLink></li>
                    </ul>
                </li>
                <li className="submenu">
                    <a onClick={this.showDropdown} href="#"><i className="fa fa-table" aria-hidden="true" /> <span> Tables</span> <span className="menu-arrow" /></a>
                    <ul className="list-unstyled" style={{ display: 'none' }}>
                        <li><NavLink activeClassName="active" to="/admin/tables-basic">Basic Tables</NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/tables-datatables">Data Table</NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink activeClassName="active" to="calendar.html"><i className="far fa-calendar-alt" /> Calendar</NavLink>
                </li>
            </ul>
        )
    }
}
