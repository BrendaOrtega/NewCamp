import React from 'react';
import "./Bootcamp.css"
import { Form, Input } from "antd";
import { connect } from 'react-redux'
import { onChangeStudentAction } from '../../redux/bootcampDuck'


const StepDos = ({ student, onChangeStudentAction }) => {

    function onChange({ target: { name, value } }) {
        onChangeStudentAction({ ...student, [name]: value })
    }

    return (
        <div className="step">
            <p>Escribe tu nombre completo, recuerda que así aparecerá en tu certificado.</p>

            <Form.Item>
                <Input
                    name="name"
                    onChange={onChange}
                    value={student.name}
                    type="text"
                    placeholder="Nombre"
                />
            </Form.Item>
            <Form.Item>

                <Input
                    name="tel"
                    onChange={onChange}
                    value={student.tel}
                    type="text"
                    placeholder="Teléfono"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    name="email"
                    onChange={onChange}
                    value={student.email}
                    type="email"
                    placeholder="Email"
                />
            </Form.Item>

        </div>
    );
};

function mapState({ bootcamps: { student } }) {
    return {
        student
    }
}

export default connect(mapState, { onChangeStudentAction })(StepDos)