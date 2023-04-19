import React from "react";

import Description from "./Description";
import Discount from "./Discount";

const Highlights = () => {
    return (
        <div
            className="highlight_wrapper bck_black"
            style={{
                color: "white",
                paddingTop: "50px",
                paddingBottom: "50px",
            }}>
            <Description />
            <Discount />
        </div>
    );
};

export default Highlights;
