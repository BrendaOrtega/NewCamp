import React, { Component } from 'react';
import "./Login.css";
import { Form, Icon, Input, Modal, Spin } from 'antd';
import { Link } from "react-router-dom";
import queryString from 'query-string'
import { connect } from 'react-redux'
import { loginAction, recoverPassword } from '../../redux/userDuck'
import toastr from 'toastr'


class Login extends Component {

    state = {
        recoveryEmail: null,
        next: null,
        auth: {
            email: null,
            password: null
        }
    }

    _onChange = ({ target: { name, value } }) => {
        let { auth } = this.state
        auth[name] = value
        this.setState({ auth })
    }

    componentDidMount() {
        window.scroll(0, 0)
        if (this.props.loggedIn) return this._redirect()
        let parsed = queryString.parse(this.props.location.search)
        if (parsed.next) this.setState({ next: parsed.next })

    }

    storeRecoveryEmail = ({ target: { value } }) => {
        this.setState({ recoveryEmail: value })
    }

    sendRecoveryEmail = () => {
        if (!this.state.recoveryEmail || !this.state.recoveryEmail.includes('@')) return
        this.setState({ modal: false })
        this.props.recoverPassword(this.state.recoveryEmail)
        toastr.info("Listo, revisa tu correo electrónico y sigue las instrucciones.")
    }

    _redirect = () => {
        if (this.state.next) this.props.history.push(this.state.next)
        else this.props.history.push('/profile')
    }

    signIn = () => {
        let { auth } = this.state
        if (!auth.email || !auth.password || this.props.fetching) return
        this.props.loginAction(auth)
            .then(() => {
                if (this.props.error) toastr.error(this.props.error)
                else this._redirect()
            })
    }

    render() {
        let { auth } = this.state
        return (
            <div >
                <div className="black mobile-display"></div>
                <div className="login">
                    <div className="login-box">
                        <div>
                            <h3 className="sub">Iniciar Sesión 2</h3>
                                <br/>

                            <Form className="login-form">
                                {/* <div className="redes_login">
                                    <div className="circle_f" >
                                        <FontAwesome name="facebook" />
                                    </div>
                                    <div className="circle_g" >
                                        <FontAwesome name="google" />
                                    </div>
                                </div> */}
                                {/* <div className="division">
                                    <hr className="line_log" /> or <hr className="line_log" />
                                </div> */}
                                <Form.Item>
                                    <label style={{fontSize:"18px"}} htmlFor="">Email</label>
                                    <Input
                                        value={auth.email}
                                        name="email"
                                        onChange={this._onChange}
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="ejemplo@fixter.org"
                                    />
                                </Form.Item>
                                <br/>
                                <Form.Item>
                                    <label style={{fontSize:"18px"}} htmlFor="">Contraseña</label>
                                    <Input
                                        value={auth.password}
                                        onChange={this._onChange}
                                        name="password"
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Al menos 8 dígitos"
                                    />
                                </Form.Item>
                                <br/>
                                <Form.Item style={{ textAlign: "center", marginTop:"24px" }}>

                                    <a onClick={() => this.setState({ modal: true })} className="login-form-forgot" href="#">
                                        <p className="forget">¿Olvidaste tu contraseña?</p>
                                    </a>
                                    <br />
                                    <br/>
                                    <div>
                                        <button
                                            onClick={this.signIn}
                                            className="btn-explore">
                                            {this.props.fetching ? <Spin /> : "Entrar"}
                                        </button>
                                    </div>

                                    <Link to={"/registro?next=" + this.state.next} className="regist" >Crea una cuenta</Link>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <div className="login-img">
                        <div className="cover2"></div>
                    </div>
                </div>
                <Modal
                    onOk={this.sendRecoveryEmail}
                    onCancel={() => this.setState({ modal: false })}
                    visible={this.state.modal}>
                    <h3>Escribe el correo electrónico que usas para entrar a Fixter.Camp</h3>
                    <p>Te enviaremos las instrucciones para que reestablescas tu contraseña.</p>
                    <p style={{ color: "red" }}>Si utilizas esta opción, tu contraseña anterior dejará de funcionar.</p>
                    <Form.Item>
                        <Input
                            onChange={this.storeRecoveryEmail}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Email"
                        />
                    </Form.Item>
                </Modal>
            </div>
        )
    }
}

function mapState({ user }) {
    return { ...user }
}

export default connect(mapState, { loginAction, recoverPassword })(Login)