import React from 'react';
import { Card, CardContent, IconButton } from 'ui-neumorphism';
import { NavLink } from "react-router-dom";
import Icon from '@mdi/react';
import {
    mdiHome,
    mdiChartLine,
    mdiBell,
    mdiAccount,
    mdiHamburger
} from '@mdi/js';
import './Navigation.css';


function Navigation(props) {

    return (
        <Card className='navigation' width={340} height={60}>
            <CardContent style={{display: 'flex', justifyContent: 'space-between'}}>
                <IconButton size='small'>
                    <NavLink 
                        to="/program" 
                        className={window.location.pathname !== "/program" ? 'links' : "blue-link"}
                    >
                        <Icon path={mdiHome} size={1.2} />
                    </NavLink>
                </IconButton>
                <IconButton size='small'>
                    <NavLink 
                        to="/planlist" 
                        className={window.location.pathname !== "/planlist" ? 'links' : "blue-link"}
                    >
                        <Icon path={mdiChartLine} size={1.2} />
                    </NavLink>
                </IconButton>
                <IconButton size='small'>
                    <NavLink 
                        to="/food" 
                        className={window.location.pathname !== "/food" ? 'links' : "blue-link"}
                    >
                        <Icon path={mdiHamburger} size={1.2} />
                    </NavLink>
                </IconButton>
                <IconButton size='small'>
                    <NavLink 
                        to="/notification" 
                        className={window.location.pathname !== "/notification" ? 'links' : "blue-link"}
                    >
                        <Icon path={mdiBell} size={1.2} />
                    </NavLink>
                </IconButton>
                <IconButton size='small'>
                    <NavLink    
                        to="/profile" 
                        className={window.location.pathname !== "/profile" ? 'links' : "blue-link"}
                    >
                        <Icon path={mdiAccount} size={1.2} />
                    </NavLink>
                </IconButton>
            </CardContent>
        </Card>
    )
}

export default Navigation;
