import React from 'react';
import "./CourseCard.css"


export const CourseCard = ({image, name, lecciones, tiempo}) => {


    return (
        <div className="course-card">
        {/*    <Link to="/courses/detail">*/}
                <div className="box-badge">
                    <img className="badge" src={image} alt="badge-curso"/>
                </div>
                <hr/>
                <div className="box-curso">
            {/*        <div className="author-photo" style={{backgroundImage:`url("https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/64253119_2199919590103417_3376381376021397504_n.jpg?_nc_cat=111&_nc_oc=AQmnpwdGmMvQxzcFHhL-z0oB6eFZUOCYz2jbguwQCfEKlGCvQYFv0q19ysD9lWhvIsc&_nc_ht=scontent.fmex6-1.fna&oh=4afd8190cf626eebf98fdcd68f81821f&oe=5D84A0CC")`}}>
                    </div>*/}
                    <div className="autor-info">
                        <h4>{name}</h4>
                        <p>{lecciones} <span>&bull;</span> {tiempo}</p>
                    </div>
                </div>
                <div className="price">
                    <span>Próximamente</span>
                </div>
{/*            </Link>*/}
        </div>
    );
};