import React, { Component } from 'react';
import "./Login.css";
import { Form, Spin, Icon, Input } from 'antd';
import { Link } from "react-router-dom";
import { createAccountAction } from '../../redux/userDuck'
import toastr from 'toastr'
import { connect } from 'react-redux'
import queryString from 'query-string'


class Registro extends Component {

    state = {
        error: { email: undefined, password: undefined, password2: undefined },
        isValid: false,
        email: null,
        password: '',
        password2: null

    }
    componentDidMount() {
        if (this.props.loggedIn) return this._redirect()
        let parsed = queryString.parse(this.props.location.search)
        if (parsed.next) this.setState({ next: parsed.next })
    }

    _onChange = ({ target: { name, value } }) => {

        this.setState({ [name]: value }, this._isValid)

    }

    _isValid = () => {
        let { email, password, password2 } = this.state
        let error = { email: false, password: false, password2: false }
        let isValid = true
        if (!email || email.length < 8 || !email.includes("@")) {
            error.email = "Escribe un correo electrónico válido"
            isValid = false
        }
        if (!password || password.length < 6) {
            error.password = "Tu constraseña debe contener al menos 6 letras o números"
            isValid = false
        }
        if (password !== password2) {
            error.password2 = "La contraseña no coincide"
            isValid = false
        }
        this.setState({ error, isValid })
        return isValid
    }

    createAccount = () => {
        if (!this.state.isValid) return
        this.props.createAccountAction(this.state)
            .then(() => {
                if (this.props.error) toastr.error(this.props.error)
                else this._redirect()
            })
    }

    _redirect = () => {
        if (this.state.next) this.props.history.push(this.state.next)
        else this.props.history.push('/profile')
    }

    render() {
        let { error, email, password, password2 } = this.state
        return (
            <div >
                <div className="login">
                    <div className="login-box">
                        <div>
                        <h3 className="sub">Completa el registro</h3>
                        <br />
                        <Form className="login-form">

                            <Form.Item
                                hasFeedback
                                validateStatus={error.email ? "error" : error.email === undefined ? "warning" : "success"}
                                help={error.email}
                            >
                                <label style={{fontSize:"18px"}} htmlFor="">Email</label>
                                <Input
                                    name="email"
                                    value={email}
                                    onChange={this._onChange}
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="ejemplo@fixter.org"


                                />
                            </Form.Item>
                            <br/>
                            <Form.Item
                                hasFeedback
                                validateStatus={error.password ? "error" : error.password === undefined ? "warning" : "success"}
                                help={error.password}
                            >
                                <label style={{fontSize:"18px"}} htmlFor="">Contraseña</label>
                                <Input
                                    name="password"
                                    value={password}
                                    onChange={this._onChange}
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Almenos 8 caracteres"
                                />
                            </Form.Item>
                            <br/>
                            <Form.Item
                                hasFeedback
                                validateStatus={error.password2 ? "error" : error.password2 === undefined ? "warning" : "success"}
                                help={error.password2}
                            >
                                <label style={{fontSize:"18px"}} htmlFor="">Repite tu contraseña</label>
                                <Input
                                    name="password2"
                                    value={password2}
                                    onChange={this._onChange}
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Almenos 8 caracteres"
                                />
                            </Form.Item>
                            <br />
                            <Form.Item style={{ textAlign: "center" }}>

                                <div>
                                    <button onClick={this.createAccount} className="btn-login">
                                        {this.props.fetching ? <Spin size="large" /> : "Crear"}
                                    </button>
                                </div>
                                <Link to={"/login?next=" + this.state.next} className="regist" >Ya tengo una cuenta</Link>
                            </Form.Item>
                        </Form>
                    </div>

                    </div>
                    <div className="login-img">
                    <div className="cover2">

                    </div>
                </div>
                </div>

            </div>
        )
    }
}
function mapState({ user }) {
    return {
        ...user,
        fetching: user.fetching,
        error: user.error
    }
}
export default connect(mapState, { createAccountAction })(Registro)