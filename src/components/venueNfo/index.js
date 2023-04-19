import React from "react";

import { Zoom } from "react-awesome-reveal";

import icon_calendar from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";

const VenueNfo = () => {
    return (
        <div className="bck_grey">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    <Zoom className="vn_item" triggerOnce delay={500}>
                        <div>
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square border_purple"></div>
                                    <div
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_calendar})`,
                                        }}></div>
                                    <div className="vn_title">
                                        Data e Horário do Evento
                                    </div>
                                    <div className="vn_desc">
                                        08 de Dezembro @14:00pm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom
                        className="vn_item vn_location"
                        triggerOnce
                        delay={1000}>
                        <div>
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square border_purple"></div>
                                    <div
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_location})`,
                                        }}></div>
                                    <div className="vn_title">
                                        Local do Evento
                                    </div>
                                    <div className="vn_desc">
                                        Pça. Roberto Gomes Pedrosa, 1 - Morumbi,
                                        SP
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default VenueNfo;
