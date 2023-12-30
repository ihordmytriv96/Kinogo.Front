import React from 'react';
import { useStyles } from './styles'
import NavBar from '../Navbar';


interface LayoutProps{
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    const classes = useStyles();

    return (
        <div className={classes.centerContainer}>
            <div className={classes.layout}>
                {children}
            </div>
        </div>
    );
};

export default Layout;