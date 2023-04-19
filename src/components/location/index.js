/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function Location() {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0928476179693!2d-46.72261432459986!3d-23.601002863049974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce56c31b1fe649%3A0x7d134f4dfc6618c2!2sEst%C3%A1dio%20C%C3%ADcero%20Pompeu%20de%20Toledo!5e0!3m2!1spt-BR!2sbr!4v1681933606611!5m2!1spt-BR!2sbr"
                width="100%"
                height="500"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="location_tag">
                <div>Localização</div>
            </div>
        </div>
    );
}

export default Location;
