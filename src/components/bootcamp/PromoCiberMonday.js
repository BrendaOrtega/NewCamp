import React, { useState, useEffect } from 'react';
import "./Bootcamp.css"
import { Form, Input, Select, Button, Spin } from "antd";
import { connect } from 'react-redux'
import { makeBootcampPurchasePromoAction } from '../../redux/userDuck'
import toastr from 'toastr'

const { Option } = Select;



const PromoCiberMonday = ({ bootcamps, error, makeBootcampPurchasePromoAction }) => {

    let [errors, setError] = useState({})
    let [total, setTotal] = useState(1250)
    let [loading, setLoading] = useState(false)
    let [form, setForm] = useState({ bootcampId: "5de52b17734c4163308b63fe" })
    let [success, setSuccess] = useState(false)

    useEffect(() => {
        if (error) {
            setLoading(false)
            toastr.error(error)
            console.log(error)
        }
    }, [error])

    useEffect(() => {
        // conekta
        let script = document.createElement('script')
        script.src = "https://cdn.conekta.io/js/latest/conekta.js"
        script.async = true
        document.body.appendChild(script)
        script.onload = () => {
            window.Conekta.setPublicKey("key_WjR6vbjKGjpeL4sQCwJYCVw")
        }

    }, [])

    function makePurchase() {
        if (!_validate()) return
        // loading
        setLoading(true)
        // create form
        let sendForm = {
            "card": {
                "number": form.number,
                "name": form.cardName,
                "exp_year": form.year,
                "exp_month": form.month,
                "cvc": form.cvc
            }
        }
        // tokenize
        window.Conekta.Token.create(
            sendForm,
            conektaSuccessResponseHandler,
            conektaErrorResponseHandler
        );
        // send to backend
        // loading
        // redirect
    }

    function conektaSuccessResponseHandler(token) {
        // action para enviar token
        makeBootcampPurchasePromoAction({ bootcampName: form.bootcampName, tokenId: token.id, total, tel: form.tel, email: form.email, fullName: form.fullName, bootcampId: form.bootcampId })
            // camba esto !!!    
            .then(() => {
                setLoading(false)
                if (error) toastr.error(error)
                else {
                    toastr.success("Pago realizado con éxito.")
                    setSuccess(true)
                }
            })
            .catch(e => {
                toastr.error("No se pudo cobrar, intenta de nuevo")
                setLoading(false)
                console.log(e)
            })
    }
    function conektaErrorResponseHandler(response) {
        // this.setState({ error: response.message_to_purchaser })
        // toastr.error(response.message_to_purchaser);
        // this.setState({ loading: false })
    }

    // useEffect(() => {
    //     _validate()
    // }, [student])

    function _validate() {
        let error = {}
        let isValid = true
        if (!form.cardName) {
            error.cardName = "El nombre del tarjetahabiente no puede estar vacio"
            isValid = false
        }
        if (!form.number || form.number.length < 16) {
            error.number = "Verifica el numero de la tarjeta"
            isValid = false
        }
        if (!form.month || form.month.length < 2) {
            error.month = "Verifica el numero de expiración"
            isValid = false
        }
        if (!form.year || form.year.length < 4) {
            error.year = "El año de expiración debe ser de 4 dígitos"
            isValid = false
        }
        if (!form.cvc || form.cvc.length < 3) {
            error.cvc = "Verifica el código de seguridad"
            isValid = false
        }
        if (!form.fullName || !form.tel || !form.email) {
            error.general = "Completa estos campos"
            isValid = false
        }
        setError(error)
        return isValid
    }

    function onChange({ target: { name, value } }) {
        if (name === "month" && value.length > 2) return
        if (name === "year" && value.length > 4) return
        if (name === "cvc" && value.length > 4) return
        setForm({ ...form, [name]: value })
    }

    function handleChange(value) {
        let b = bootcamps.find(boo => boo._id == value)
        setForm({ ...form, "bootcampId": value, bootcampName: b.title })
        //console.log(form)
        // setTotal(Number(value) * 1000)
    }
    if (success) return (
        <div style={{ minHeight: "72vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="step apply-box">
                <h2>
                    Tu pago fué recibido con éxito, comunicate con nostros para asignar tus lugares en el bootcamp.
        </h2>
                <img width="100%" src="https://www.xovi.com/wp-content/uploads/2017/04/emoji.jpg" alt="emoji" />
                <a style={{ fontSize: "2rem" }} href="https://www.facebook.com/fixterme/">Click aquí</a>
            </div>
        </div>
    )
    return (
        <section >
            <div className="black"></div>
        <div style={{ minHeight: "72vh", display: "flex", justifyContent: "center", alignItems: "center" }} className="preorder-form">

            <div className="step apply-box">
                <h2 style={{fontSize:"28px"}}>¡Continua aprendiendo!</h2>
                <h4>Paga los <strong style={{color:"#ca3e47"}}>$1,250.00MXN</strong> restantes del costo total de tu bootcamp.</h4>

                <h5><em>Recuerda que el acceso al bootcamp es permanente</em></h5>
                <br/>
{/*
                <p style={{ color: "green" }}>Esta promoción es válida para cualqueir curso</p>
*/}
                <div>
                    {/* <label htmlFor="">Nombre</label>
                    <Input
                        name="fullName"
                        value={form.fullName}
                        onChange={onChange}
                        placeholder="Tu nombre completo"
                    /> */}

                    <label className="marg" htmlFor="">Teléfono</label>
                    <Input
                        name="tel"
                        value={form.tel}
                        onChange={onChange}
                        placeholder="55 555 55 55"
                    />
                    {/* <label className="marg" htmlFor="">Email</label>
                    <Input
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder="ejemplo@fixter.camp"
                    /> */}
                    <p style={{ color: "red" }}>{errors.general}</p>
                    <p>¿Cual es el bootcamp que liquidarás?</p>
                    <Select style={{ width: "100%" }} defaultValue={form.bootcampId} onChange={handleChange}>
                        {bootcamps.map((b, i) => {
                            return <option key={i} value={b._id} >{b.title}</option>
                        })}
                    </Select>
                </div>
                <br/>
                <br/>
                <h3>Información de pago</h3>

                <Form.Item
                    hasFeedback
                    help={errors.cardName}
                    validateStatus={errors.cardName && "error"}
                >
                    <label htmlFor="">Nombre del Titular</label>
                    <Input
                        name="cardName"
                        value={form.cardName}
                        onChange={onChange}
                        placeholder="Nombre completo"
                    />
                </Form.Item>
                <Form.Item
                    hasFeedback
                    help={errors.number}
                    validateStatus={errors.number && "error"}
                >
                    <label htmlFor="">Número de la tarjeta</label>
                    <Input
                        name="number"
                        value={form.number}
                        onChange={onChange}
                        placeholder="4242 4242 4242 4242"
                    />
                </Form.Item>
                <div className="pay-fl">
                    <label htmlFor="">
                        Mes de expiración
                    <Input
                            name="month"
                            value={form.month}
                            onChange={onChange}
                            placeholder="12"
                        />
                        <span style={{ color: "red" }}>{errors.month}</span>
                    </label>
                    <label htmlFor="">
                        Año de expiración
                    <Input
                            name="year"
                            value={form.year}
                            onChange={onChange}
                            placeholder="2020"
                        />
                        <p style={{ color: "red" }}>{errors.year}</p>
                    </label>
                    <label htmlFor="">
                        Código de seguridad
                    <Input
                            name="cvc"
                            value={form.cvc}
                            onChange={onChange}
                            placeholder="VVV"
                        />
                        <p style={{ color: "red" }}>{errors.cvc}</p>
                    </label>

                </div>

                <br />
                <h1>Total: ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00MXN</h1>

                <Button style={{width:"120px"}} type="primary" disabled={loading} onClick={makePurchase}>
                    {loading ? <Spin /> : "Pagar"}
                </Button>
            </div>{/*// box */}
        </div ></section>
    );
};

function mapState({ user: { error }, bootcamps: { array } }) {
    return {
        error,
        bootcamps: array
    }
}

export default connect(mapState, { makeBootcampPurchasePromoAction })(PromoCiberMonday)