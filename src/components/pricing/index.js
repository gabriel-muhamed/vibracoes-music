import React from "react";

import { Zoom } from "react-awesome-reveal";
import MyButton from "../utils/MyButton";

const Pricing = () => {
    const priceState = {
        prices: [100, 150, 250],
        position: ["Pista", "PistaVIP", "Camarote"],
        description: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable , by injected humour",
        ],
        linkto: ["http://sales.b", "http://sales.m", "http:sales.c"],
        delay: [500, 0, 500],
    };

    const showBoxes = () =>
        priceState.prices.map((box, i) => (
            <Zoom
                triggerOnce
                key={i}
                className="pricing_item"
                delay={priceState.delay[i]}>
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${priceState.prices[i]}</span>
                        <span>${priceState.position[i]}</span>
                    </div>
                    <div className="pricing_description">
                        {priceState.description[i]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            text="Comprar"
                            link={priceState.linkto[i]}
                            size="large"
                        />
                    </div>
                </div>
            </Zoom>
        ));

    return (
        <div className="bck_grey">
            <div className="center_wrapper pricing_section">
                <h2>Preços</h2>

                <div className="pricing_wrapper">{showBoxes()}</div>
            </div>
        </div>
    );
};

export default Pricing;
