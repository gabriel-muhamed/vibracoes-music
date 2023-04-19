import React from "react";
import { scroller } from "react-scroll";

import { Drawer, List, ListItem } from "@mui/material";

const SideDrawer = (props) => {
    const links = [
        { where: "featured", value: "Para o topo" },
        { where: "festivalinfo", value: "Festival INFO" },
        { where: "highlights", value: "Destaques" },
        { where: "pricing", value: "Preços" },
        { where: "location", value: "Localização" },
    ];

    const scrollToElement = (e) => {
        scroller.scrollTo(e, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offSet: -150,
        });
        props.onClose(false);
    };

    const renderItem = (item) => (
        <ListItem
            button
            onClick={() => scrollToElement(item.where)}
            key={item.where}>
            {item.value}
        </ListItem>
    );

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}>
            <List component="nav">{links.map((item) => renderItem(item))}</List>
        </Drawer>
    );
};

export default SideDrawer;
