import React from 'react';
import './toolbar.css';
import DrawToggleButton from './SideDrawer/DrawerToggleButton';

const toolbar = props =>{
<header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar_toggle_button"><DrawToggleButton /></div>
        <div className="toolbar__logo"><a href="/">LOGO</a></div>
        <div className = "spacer"/>
        <div className="toolbar_navigation-items"></div>
    </nav>
</header>
}