    import React, { useEffect } from 'react';
import "./Courses.css"
import badge from "../../assets/badget1.png"
import {Link} from "react-router-dom";
import ButtonRed from "../common/ButtonRed"
import { Tabs } from 'antd';
import {CourseProgram} from "./CourseProgram";
import {CourseDescription} from "./CourseDescription"

const { TabPane } = Tabs;


function callback(key) {
    console.log(key);
}

export const CoursesDetail = () => {

    useEffect(
        ()=> {
            window.scroll(0, 0)
        },
        []
    )

    return (
        <section>
            <div className="black"></div>
            <div className="flex">
                <div className="detail-descript">
                    <h2>Introducción a Firebase</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis
                        consequatur cumque cupiditate dicta dolor ducimus earum est harum inventore,
                        ipsum laboriosam maiores odit quidem reiciendis rem soluta suscipit unde.
                    </p>
                    <Link to="/curso/detail/pay">
                        <ButtonRed text="COMPRAR"/>
                    </Link>
                </div>
                <div className="detail-badge">
                    <img src={badge} alt="curso-badge"/>
                </div>
            </div>



            <div className=" box-detail">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Descripción" key="1">
                        <CourseDescription/>
                    </TabPane>
                    <TabPane tab="Programa" key="2">
                        <CourseProgram/>
                    </TabPane>
                    {/*<TabPane tab="Comunidad" key="3">
                        Content of Tab Pane 3
                    </TabPane>*/}
                </Tabs>
            </div>
        </section>
    );
};