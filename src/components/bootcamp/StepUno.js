import React from 'react';
import "./Bootcamp.css"
import moment from 'moment'

export const StepUno = ({ selected }) => {
    let title = selected ? selected.title : "Fundamentos del Desarrollo Web | Bootcamp Online"
    let startDate = selected ? selected.startDate : "01/10/2020"
    let price = selected ? selected.price : 6000
    price = String(price).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    return (
        <div className="step">
            <h2>{title}</h2>
          {/*  <p>{moment(startDate).format("ll")}</p>*/}
            <p><strong>$ {price}.00MXN</strong></p>
            <br />
            <p>
                En cada uno de nuestros botocamps online, aprenderás a programar con las herramientas
                más  utilizados en el desarrollo de software, tanto para frontend, backend y mobile.
                Además de la oportunidad de inscribirte a ediciones presenciales
                siempre con un precio mucho menor, de asisitir a nuestros eventos o meetups, y sobre todo
                serás parte de nuestra comunidad.

            </p>
        </div>
    );
};