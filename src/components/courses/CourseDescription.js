import React from 'react';
import "./Courses.css"
import FontAwesome from "react-fontawesome"

export const CourseDescription = () => {
    return (
        <div className="course-descript">
            <div className="descripcion-text">
                <iframe title="Example"
                    src="https://www.youtube.com/embed/Rux-Q_nPrp0" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                <h3>Aprende a utilizar las herramientas de Firebase para vender tu marca de manera profesional</h3>
                <p>Los tiempos en que la televisión era el principal soporte publicitario quedaron atrás y, hoy en día,
                    Instagram se alza como una de las principales plataformas de promoción, abriendo nuevos caminos y
                    medios para impactar a los usuarios de maneras nuevas y creativas. Juanmi Díez es consultor de
                    publicidad, especialista en branding y gestión creativa de marcas, y un experto en crear estrategias
                    de marketing en redes sociales a partir de insights y con la creatividad como pilar central.
                </p>
                <p>Los tiempos en que la televisión era el principal soporte publicitario quedaron atrás y, hoy en día,
                    Instagram se alza como una de las principales plataformas de promoción, abriendo nuevos caminos y
                    medios para impactar a los usuarios de maneras nuevas y creativas. Juanmi Díez es consultor de
                    publicidad, especialista en branding y gestión creativa de marcas, y un experto en crear estrategias
                    de marketing en redes sociales a partir de insights y con la creatividad como pilar central.
                </p>
                <h3>¿A quién está dirigido?</h3>
                <p>A community managers, publicistas, ilustradores, diseñadores, artistas o a cualquier persona que quiera dar a conocer su marca en Instagram.</p>
                <h3>Requisitos</h3>
                <p>Solo necesitarás tener conocimientos básicos de redes sociales.

                    Con respecto a los materiales, deberás tener acceso a un teléfono móvil con la app de Instagram instalada y un ordenador con conexión a internet. </p>
            </div>
            <div className="descripcion-autor">
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div className="autor-foto" style={{backgroundImage:`url("https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/64253119_2199919590103417_3376381376021397504_n.jpg?_nc_cat=111&_nc_oc=AQmnpwdGmMvQxzcFHhL-z0oB6eFZUOCYz2jbguwQCfEKlGCvQYFv0q19ysD9lWhvIsc&_nc_ht=scontent.fmex6-1.fna&oh=4afd8190cf626eebf98fdcd68f81821f&oe=5D84A0CC")`}}>
                    </div>
                </div>
                <h3>Brenda 0rtega</h3>
                <br/>
                <div style={{textAlign:"left"}}>
                    <h4>Detalles del curso</h4>
                    <hr className="divider"/>
                    <p> <FontAwesome name="film"/>10 lecciones  </p>
                    <p> <FontAwesome name="hourglass-start"/> 25 minutos  </p>
                    <p> <FontAwesome name="language"/> Espanol  </p>
                    <p> <FontAwesome name="laptop"/>Online y a tu tiempo</p>
                </div>
            </div>
        </div>
    );
};