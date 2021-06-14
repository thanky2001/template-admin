import React, { Component } from 'react';
import './leftNav.css';
import SettingsNav from './SettingsNav';
import DashboardNav from './DashboardNav';
import ChatsNav from './ChatsNav';


export default class LeftNav extends Component {
    render() {
        const renderSliderNav = () => {
            switch (window.location.pathname) {
                case '/admin/settings' :
                case '/admin/localization':
                case '/admin/email-settings':
                case '/admin/salary-settings':
                case '/admin/change-password':
                case '/admin/theme-settings':
                case '/admin/invoice-settings':
                case '/admin/notifications-settings':
                case '/admin/roles-permissions':
                case '/admin/leave-type':
                    return <SettingsNav/>
                case '/admin/chat':
                    return <ChatsNav/>
                default:
                    return <DashboardNav/>
            }
        }
        return (
                <div className="sidebar" id="sidebar">
                    <div className="sidebar-inner slimscroll">
                        <div id="sidebar-menu" className="sidebar-menu">
                            <div>
                            {renderSliderNav()}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
