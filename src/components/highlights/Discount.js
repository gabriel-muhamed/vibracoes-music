import React, { useState, useEffect } from "react";

import { Fade, Slide } from "react-awesome-reveal";

import MyButton from "../utils/MyButton";

const Discount = () => {
    const end = 30;
    const [start, setStart] = useState(0);

    const porcentage = () => {
        if (start < end) {
            setStart((prevCount) => prevCount + 1);
        }
    };

    useEffect(() => {
        if (start > 0 && start < 30) {
            setTimeout(() => {
                setStart((prevCount) => prevCount + 1);
            }, 30);
        }
    }, [start]);

    return (
        <div
            className="center_wrapper"
            style={{
                borderBottom: "2px #513bfa solid",
                paddingBottom: "5px",
            }}>
            <div className="discount_wrapper">
                <Fade
                    onVisibilityChange={(inView) => {
                        if (inView) {
                            porcentage();
                        }
                    }}
                    triggerOnce>
                    <div className="discount_porcentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>

                <Slide right triggerOnce>
                    <div className="discount_description">
                        <h3>Compre antes de 20 de Outubro</h3>
                        <p>
                            {" "}
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything
                            embarrassing hidden in the middle of text. All the
                            Lorem Ipsum generators on the Internet tend to
                            repeat predefined chunks as necessary, making this
                            the first true generator on the Internet. It uses a
                            dictionary of over 200 Latin words, combined with a
                            handful of model sentence structures, to generate
                            Lorem Ipsum which looks reasonable. The generated
                            Lorem Ipsum is therefore always free from
                            repetition, injected humour, or non-characteristic
                            words etc.
                        </p>

                        <MyButton
                            text="Comprar entrada"
                            link="http://www.google.com"
                            size="large"
                        />
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Discount;
