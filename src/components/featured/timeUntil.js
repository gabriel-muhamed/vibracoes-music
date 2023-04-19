/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";

import { Slide } from "react-awesome-reveal";

const TimeUntil = () => {
    const [time, setTime] = useState({
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0",
    });

    const [eventPassed, setEventPassed] = useState(false);

    const renderItem = (time, value) => (
        <div className="countdown_item">
            <div className="countdown_time">{time}</div>
            <div className="countdown_tag">{value}</div>
        </div>
    );

    const getTimeUntil = useCallback((deadline) => {
        // Know the event date
        const time = Date.parse(deadline) - Date.parse(new Date());

        if (time < 0) {
            setEventPassed(true);
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));

            setTime({
                days,
                hours,
                minutes,
                seconds,
            });
        }
    }, []);

    useEffect(() => {
        setInterval(() => getTimeUntil("Dec, 08, 2023, 14:08:00"), 1000);
    }, [getTimeUntil]);

    return (
        <Slide triggerOnce left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    <p
                        style={{
                            marginBlockStart: "0em",
                            marginBlockEnd: "0em",
                        }}>
                        {eventPassed
                            ? "Evento já ocorreu!"
                            : "Evento começa em"}
                    </p>
                </div>
                <div className="countdown_bottom">
                    {renderItem(time.days, "Dias")}
                    {renderItem(time.hours, "Horas")}
                    {renderItem(time.minutes, "Minutos")}
                    {renderItem(time.seconds, "Segundos")}
                </div>
            </div>
        </Slide>
    );
};

export default TimeUntil;
