import React, { useEffect, useState } from "react";

import { AppBar, Toolbar, IconButton } from "@mui/material";
import Menu from "@mui/icons-material/Menu";

import SideDrawer from "./SideDrawer";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (val) => {
        setDrawerOpen(val);
    };

    return (
        <AppBar
            position="fixed"
            style={{
                backgroundColor: "transparent",
                transition: "background-color 0.5s ease-out",
                boxShadow: "none",
                padding: "10px 0px",
            }}>
            <Toolbar>
                <div className="header_logo">
                    <div className="font_righteous header_logo_venue">
                        Festival
                    </div>
                    <div className="header_logo_title">de Vibrações</div>
                </div>

                <IconButton
                    aria-label="Menu"
                    color="inherit"
                    onClick={() => toggleDrawer(true)}>
                    <Menu />
                </IconButton>

                <SideDrawer
                    open={drawerOpen}
                    onClose={(val) => toggleDrawer(val)}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
