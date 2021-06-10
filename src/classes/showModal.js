import React from 'react';
import ReactDatetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";


export function renderModal(id) {
    switch (id) {
        case 'add_roles':
            return (
                <form>
                    <div className="form-group">
                        <label>Role Name <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="m-t-20 text-center">
                        <button className="btn btn-primary btn-lg">Create Role</button>
                    </div>
                </form>
            );
        case 'edit_roles':
            return (
                <form>
                    <div className="form-group">
                        <label>Role Name <span className="text-danger">*</span></label>
                        <input className="form-control" defaultValue="Team Leader" type="text" />
                    </div>
                    <div className="m-t-20 text-center">
                        <button className="btn btn-primary btn-lg">Save Changes</button>
                    </div>
                </form>

            );
        case 'delete':
            return (
                <form>
                    <div className="modal-body card-box">
                        <p>Are you sure want to delete this?</p>
                        <div className="m-t-20 text-left">
                            <a href="#" className="btn btn-white mr-2" data-dismiss="modal">Close</a>
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </form>
            )
        case 'add_leavetype':
            return (
                <form>
                    <div className="form-group">
                        <label>Leave Type <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label>Number of days <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="m-t-20 text-center">
                        <button className="btn btn-primary btn-lg">Add Leave Type</button>
                    </div>
                </form>

            )
        case 'edit_leavetype':
            return (
                <form>
                    <div className="form-group">
                        <label>Leave Type <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" defaultValue="Casual Leave" />
                    </div>
                    <div className="form-group">
                        <label>Number of days <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" defaultValue={12} />
                    </div>
                    <div className="m-t-20 text-center">
                        <button className="btn btn-primary btn-lg">Save Changes</button>
                    </div>
                </form>
            )
            case 'add_employee':
            return (
                <form className="m-b-70">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Last Name</label>
                                <input className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Username <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Email <span className="text-danger">*</span></label>
                                <input className="form-control" type="email" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Password</label>
                                <input className="form-control" type="password" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Confirm Password</label>
                                <input className="form-control" type="password" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Employee ID <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Joining Date <span className="text-danger">*</span></label>
                                <div className="cal-icon">
                                    <ReactDatetime />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Phone </label>
                                <input className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Company</label>
                                <select className = "custom-select select--fix" >
                                    <option>select</option>
                                    <option>Global Technologies</option>
                                    <option>Delta Infotech</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Designation</label>
                                <select  className = "custom-select select--fix" >
                                    <option>select</option>
                                    <option>Web Developer</option>
                                    <option>Web Designer</option>
                                    <option>SEO Analyst</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive m-t-15">
                        <table className="table table-striped custom-table">
                            <thead>
                                <tr>
                                    <th>Module Permission</th>
                                    <th className="text-center">Read</th>
                                    <th className="text-center">Write</th>
                                    <th className="text-center">Create</th>
                                    <th className="text-center">Delete</th>
                                    <th className="text-center">Import</th>
                                    <th className="text-center">Export</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Holidays</td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Leave Request</td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Clients</td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Projects</td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tasks</td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Chats</td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Assets</td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Timing Sheets</td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="m-t-20 text-center">
                        <button className="btn btn-primary btn-lg">Create Employee</button>
                    </div>
                </form>

            )
        case 'edit_employee':
            return (
                <form className="m-b-70">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                                <input className="form-control" defaultValue="John" type="text" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Last Name</label>
                                <input className="form-control" defaultValue="Doe" type="text" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Username <span className="text-danger">*</span></label>
                                <input className="form-control" defaultValue="johndoe" type="text" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Email <span className="text-danger">*</span></label>
                                <input className="form-control" defaultValue="johndoe@example.com" type="email" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Password</label>
                                <input className="form-control" defaultValue="johndoe" type="password" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Confirm Password</label>
                                <input className="form-control" defaultValue="johndoe" type="password" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Employee ID <span className="text-danger">*</span></label>
                                <input type="text" defaultValue="FT-0001" readOnly className="form-control floating" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Joining Date <span className="text-danger">*</span></label>
                                <div className="cal-icon">
                                    <input className="form-control datetimepicker" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Phone </label>
                                <input className="form-control" defaultValue={9876543210} type="text" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Company</label>
                                <select defaultValue="1" className = "custom-select select--fix" >
                                    <option value="1" >Global Technologies</option>
                                    <option value="2" >Delta Infotech</option>
                                    <option value="3" >International Software Inc</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="col-form-label">Designation</label>
                                <select defaultValue="2" className = "custom-select select--fix" >
                                    <option value="1">Web Developer</option>
                                    <option value="2">Web Designer</option>
                                    <option value="3">SEO Analyst</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive m-t-15">
                        <table className="table table-striped custom-table">
                            <thead>
                                <tr>
                                    <th>Module Permission</th>
                                    <th className="text-center">Read</th>
                                    <th className="text-center">Write</th>
                                    <th className="text-center">Create</th>
                                    <th className="text-center">Delete</th>
                                    <th className="text-center">Import</th>
                                    <th className="text-center">Export</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Holidays</td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Leave Request</td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Clients</td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Projects</td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tasks</td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Chats</td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Assets</td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Timing Sheets</td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input defaultChecked type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="m-t-20 text-center">
                        <button className="btn btn-primary btn-lg">Save Changes</button>
                    </div>
                </form>

            )
        default:
            break;
    }
}
