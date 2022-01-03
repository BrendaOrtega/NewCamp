import React from 'react';
import "./CardGeneric.css"

const photo = "https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/64999116_2230291310399578_4749436687740829696_o.jpg?_nc_cat=103&_nc_oc=AQkVLUYe8T22PQo5qrmpzaG8citwaKUP3moFVD7EAG1i-_LukUy5DLm842majMmSTO0&_nc_ht=scontent.fmex6-1.fna&oh=6c2e5d051acb4c86779808be4d55170a&oe=5D7DC325"

export const CardVideo = () => {
    return (
        <section className="card-video">
            <div style={{backgroundImage:`url("${photo}")`}} id="image-video">
                <div className="back">
                    <div id="etiqueta-video">
                        <h3>Crea una app con Firebase</h3>
                    </div>
                </div>
            </div>

        </section>
    );
};