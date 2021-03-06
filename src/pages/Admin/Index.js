import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AdminRouter1 from '../../components/admin/AdminRouter/Index';
import Chats from './Chats/Chats';
import Employees from './Employees/Employees';
import EmployeesList from './Employees/EmployeesList';
import Login from './Login/Login';
import EditProfile from './Profile/EditProfile';
import Profile from './Profile/Profile';
import RightContent from './RightContent';
import ChangePassword from './Settings/ChangePassword';
import CompanySetting from './Settings/CompanySetting';
import EmailSetting from './Settings/EmailSetting';
import InvoiceSetting from './Settings/InvoiceSetting';
import LeaveType from './Settings/LeaveType';
import Localization from './Settings/Localization';
import NotificationSetting from './Settings/NotificationSetting';
import RolesPermissionsSetting from './Settings/RolesPermissionsSetting';
import SalarySetting from './Settings/SalarySetting';
import ThemeSetting from './Settings/ThemeSetting';

export default class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* <Route path="/admin"><Redirect to="/admin/login"/></Route> */}
                <Switch>
                       <Route path="/admin/login" component={Login}/>
                        {/* <RouteIndex/> */}
                        <AdminRouter1 path="/admin/settings" component={CompanySetting} />
                        <AdminRouter1 path="/admin/localization" component={Localization} />
                        <AdminRouter1 path="/admin/email-settings" component={EmailSetting} />
                        <AdminRouter1 path="/admin/salary-settings" component={SalarySetting} />
                        <AdminRouter1 path="/admin/change-password" component={ChangePassword} />
                        <AdminRouter1 path="/admin/theme-settings" component={ThemeSetting} />
                        <AdminRouter1 path="/admin/invoice-settings" component={InvoiceSetting} />
                        <AdminRouter1 path="/admin/notifications-settings" component={NotificationSetting} />
                        <AdminRouter1 path="/admin/roles-permissions" component={RolesPermissionsSetting} />
                        <AdminRouter1 path="/admin/leave-type" component={LeaveType} />
                        {/* employees */}
                        <AdminRouter1 path="/admin/employees" component={Employees} />
                        <AdminRouter1 path="/admin/employees-list" component={EmployeesList} />
                        {/* profile */}
                        {/* chat */}
                        <AdminRouter1 path="/admin/chat" component={Chats} />
                        <AdminRouter1 path="/admin/profile" component={Profile}/>
                        <AdminRouter1 path="/admin/edit-profile" component={EditProfile}/>
                        {/* dashboard */}
                        <AdminRouter1 path="/admin" component={RightContent} />
                </Switch>
            </BrowserRouter>
        )
    }
}
