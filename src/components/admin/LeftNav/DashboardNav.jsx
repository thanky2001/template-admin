import React, { Component } from 'react';
import ExtrasNav from './ExtrasNav';
import MainNav from './MainNav';
import UiNav from './UiNav';

export default class DashboardNav extends Component {
    render() {
        return (
            <div>
                <MainNav/>
                <UiNav/>
                <ExtrasNav/>
            </div>
        )
    }
}
