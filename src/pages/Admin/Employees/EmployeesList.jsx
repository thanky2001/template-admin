import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import HeaderEmployees from '../Components/HeaderEmployees';
import { renderModal } from '../../../classes/showModal';
import CustomModal from '../Components/CustomModal';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

class EmployeesList extends Component {
    columns = [
        {
            name: "uName",
            label: "Name",
            options: {
                filter: true,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    let {listUser}= this.props;
                    let user = listUser[dataIndex];
                    return (
                       <div className="avt">
                            <Link to="/admin/profile" className="avatar">{user.uName.slice(0, 1)}</Link>
                            <h5><Link to="/admin/profile">{user.uName} <p>{user.designation}</p></Link></h5>
                       </div>
                    );
                }
            },
        },
        {
            name: "employeeId",
            label: "Employee ID",
            options: {
                filter: true,
                sort: false,
                customBodyRenderLite: (dataIndex) => {
                    return(
                        <span>{`FT-000${this.props.listUser[dataIndex].uid}`}</span>
                    )
                }
            },
        },
        {
            name: "email",
            label: "Email",
            options: {
                filter: true,
                sort: false,
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <a href="#" className="__cf_email__" data-cfemail="79131611171d161c391c01181409151c571a1614">[email&nbsp;protected]</a>
                    )
                }
            },
        },
        {
            name: "numberPhone",
            label: "Mobile",
            options: {
                filter: true,
                sort: false,
            },
        }, 
        {
            name: "createDay",
            label: "Join Date",
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: "role",
            label: "Role",
            options: {
                filter: true,
                sort: false,
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <div className="dropdown">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Web Developer </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Software Engineer</a>
                                <a className="dropdown-item" href="#">Software Tester</a>
                                <a className="dropdown-item" href="#">Frontend Developer</a>
                                <a className="dropdown-item" href="#">UI/UX Developer</a>
                            </div>
                        </div>
                    )
                }
            },
        },
        {
            name: "Actions",
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a data-name="Edit Employee" className="dropdown-item" onClick={this.showModal} href="#" data-toggle="modal" data-target="#edit_employee"><i className="fas fa-pen m-r-5" />
                                                                Edit</a>
                                <a data-name="Delete Employee" className="dropdown-item" onClick={this.showModal} href="#" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
                            </div>
                        </div>
                    );
                }
            }
        },
    ];
    options = {
        filterType: "checkbox",
    };
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nameMod: "",
        };
    }
    showModal = (e) => {
        let id = e.currentTarget.dataset.target.slice(1);
        let nameMod = e.currentTarget.dataset.name;
        this.setState({
            id,
            nameMod
        })
    }
    render() {
        let {listUser} = this.props;
        return (
            <div>
                <CustomModal id={this.state.id} nameMod={this.state.nameMod}>
                    {renderModal(this.state.id)}
                </CustomModal>
                <HeaderEmployees showModal={this.showModal}/>
                <MUIDataTable
                    title={"Employee List"}
                    data={listUser}
                    columns={this.columns}
                    options={this.options}
                />
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        listUser: state.userReducer.listUser,
        currentUser: state.userReducer.currentUser,
    }
}
export default connect(mapStateToProps, null)(EmployeesList);