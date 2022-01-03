import React from 'react';
import "./Courses.css"
import {Collapse} from "antd";
import {CardVideo} from "../card/CardVideo";


const { Panel } = Collapse;

const text = (
    <p style={{ paddingLeft: 24 }}>
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
        as a welcome guest in many households across the world.
    </p>
);

export const CourseProgram = () => {
    return (
        <div className="course-program">
            <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header="Introducción" key="1" style={{fontSize:"18px"}}>
                    <div id="box-videos">
                        <CardVideo/>
                    </div>
                </Panel>
                <Panel header="This is panel header 2" key="2" style={{fontSize:"18px"}}>
                    {text}
                </Panel>
                <Panel header="This is panel header 3" key="3" style={{fontSize:"18px"}}>
                    {text}
                </Panel>
            </Collapse>
        </div>
    );
};