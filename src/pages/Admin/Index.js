import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AdminRouter1 from '../../components/admin/AdminRouter/Index';
import index from '../../components/admin/AdminTemplate/Index';
import Login from './Login/Login';
import RightContent from './RightContent';
import ChangePassword from './Settings/ChangePassword';
import CompanySetting from './Settings/CompanySetting';
import EmailSetting from './Settings/EmailSetting';
import InvoiceSetting from './Settings/InvoiceSetting';
import LeaveType from './Settings/LeaveType';
import Localization from './Settings/Localization';
import NotificationSetting from './Settings/NotificationSetting';
import RolesPermissionsSetting from './Settings/RolesPermissionsSetting';
import RouteIndex from './Settings/RouteIndex';
import SalarySetting from './Settings/SalarySetting';
import ThemeSetting from './Settings/ThemeSetting';

export default class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/admin/login" component={Login} />
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
                    <AdminRouter1 path="/admin" component={RightContent} />
                </Switch>
            </BrowserRouter>
        )
    }
}
