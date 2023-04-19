import React from "react";

import { Button } from "@mui/material";

import icon_ticket from "../../resources/images/icons/ticket.png";

function MyButton(props) {
    return (
        <Button
            href={props.link}
            size={props.size}
            variant="contained"
            style={{ background: "#222531" }}
            className="mybutton">
            <img src={icon_ticket} className="iconImage" alt="icon_button" />
            {props.text}
        </Button>
    );
}

export default MyButton;
