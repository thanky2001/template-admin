import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class HeaderEmployees extends Component {
    constructor(props) {
        super(props);
        this.state={
            value:{
                employeeId:'',
                employeeName:''
            },
            error:{
                employeeId: '',
                employeeName: ''
            },
            valid:false,
        }
    }
    render() {
        let { showModal } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-4 col-3">
                        <h4 className="page-title">Employee</h4>
                    </div>
                    <div className="col-sm-8 col-9 text-right m-b-20">
                        <a href="#" data-name='Add Employee' onClick={showModal} className="btn btn-primary btn-rounded float-right" data-toggle="modal" data-target="#add_employee"><i className="fa fa-plus" /> Add Employee</a>
                        <div className="view-icons">
                            <NavLink activeClassName="active" to="/admin/employees" className="grid-view btn btn-link "><i className="fa fa-th" /></NavLink>
                            <NavLink activeClassName="active" to="/admin/employees-list" className="list-view btn btn-link"><i className="fa fa-bars" /></NavLink>
                        </div>
                    </div>
                </div>
                <div className="row filter-row">
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus ">
                            <label className="focus-label">Employee ID</label>
                            <input name="employeeId" type="text" className="form-control floating" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus">
                            <label className="focus-label">Employee Name</label>
                            <input name="employeeName" type="text" className="form-control floating" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus select-focus" style={{display: 'unset'}}>
                            <label style={{top: '-30px'}} className="focus-label">Designation</label>
                            <select className="custom-select select__search">
                                <option value="1">a</option>
                                <option value="1">b</option>
                                <option value="1">c</option>
                                <option value="1">d</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 search--fix">
                        <a href="#" className="btn btn-success btn-block"> Search </a>
                    </div>
                </div>
            </div>
        )
    }
}
