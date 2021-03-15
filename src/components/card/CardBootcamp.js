import React from 'react';
import "./CourseCard.css"
import {Link} from "react-router-dom";
import img from "../../assets/28698604_1973144766082686_589124668727305128_o.jpg";
import FontAwesome from "react-fontawesome";


export const CardBootcamp = ({image, name, descript, lecciones, tiempo, link, link2, action, thumbnail, badge, modalidad, horas, lugar, inicio}) => {


    return (
        <Link to={link}>
            <div className="bootcamp-card">
                <div className="camp-banner" style={{ backgroundImage: `url(${image})` }}>
                </div>
                {/* <div className="camp-avatar">
                    <img src={badge} alt="logo-javascript" />
                </div> */}
                <div style={{ padding: "0 6%", marginTop:"24px" }}>
                    <h3>{name}</h3>
                    <p>{descript}️</p>
                    <p id="datos"> <FontAwesome  name="calendar" />  {tiempo} <span>&bull;</span> {horas} </p>
                    <p id="datos"> <FontAwesome name="copy" />  { lugar || "Examen final"}</p>
                    <p id="datos"> <FontAwesome name="tv" /> {modalidad} </p>
                    <p id="datos" style={{color:"#CA3E47"}}> <FontAwesome name="flag" /> <strong >{inicio} </strong> </p>
                </div>
            </div>
        </Link>

    );
};