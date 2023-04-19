import React from "react";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
    return (
        <footer>
            <Fade triggerOnce delay={500}>
                <div className="font_righteous footer_logo_venue">
                    Festival de Vibrações
                </div>
                <div className="footer_copyright">
                    Festival 2023 © Todos os direitos reservados
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;
