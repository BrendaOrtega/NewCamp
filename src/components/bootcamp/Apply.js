import React, { Component } from 'react';
import "./Bootcamp.css"
import { Steps, Button, message, Spin } from 'antd';
import { StepUno } from "./StepUno"
import StepDos from "./StepDos"
import StepTres from "./StepTres";
import { connect } from 'react-redux'
import toastr from 'toastr'
import { makeBootcampPurchaseAction } from '../../redux/userDuck'

const { Step } = Steps;

const steps = [
    {
        title: 'Summary',
        content: <StepUno />,
    },
    {
        title: 'Datos',
        content: <StepDos />,
    },
    {
        title: 'Confirmación',
        content: <StepTres />,
    },
];

class Apply extends Component {
    state = {
        current: 0,
        loading: false,
        error: null
    };

    componentDidMount() {
        if (!this.props.loggedIn) {
            this.props.history.push('/login?next=/apply')
        }
        // conekta
        let script = document.createElement('script')
        script.src = "https://cdn.conekta.io/js/latest/conekta.js"
        script.async = true
        document.body.appendChild(script)
        script.onload = () => {
            window.Conekta.setPublicKey("key_WjR6vbjKGjpeL4sQCwJYCVw")
        }
    }


    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    validate = () => {
        if (this.state.current === 1 && (!this.props.student.name || !this.props.student.tel || !this.props.student.email)) {
            return toastr.warning("Completa los datos")
        }
        this.next()
    }

    makePurchase = () => {
        let { student } = this.props
        // loading
        this.setState({ loading: true })
        // create form
        let form = {
            "card": {
                "number": student.number,
                "name": student.cardName,
                "exp_year": student.year,
                "exp_month": student.month,
                "cvc": student.cvc
            }
        }
        // tokenize
        window.Conekta.Token.create(
            form,
            this.conektaSuccessResponseHandler,
            this.conektaErrorResponseHandler
        );
        // send to backend
        // loading
        // redirect
    }

    conektaSuccessResponseHandler = token => {
        // action para enviar token
        this.props.makeBootcampPurchaseAction({ tokenId: token.id, bootcampId: this.props.bootcamp._id })
            .then(() => {
                this.setState({ loading: false })
                if (this.props.error) toastr.error(this.props.error)
                else {
                    toastr.success("Pago realizado con éxito.")
                    this.props.history.push('/profile')
                }
            })
    }
    conektaErrorResponseHandler = (response) => {
        this.setState({ error: response.message_to_purchaser })
        toastr.error(response.message_to_purchaser);
        this.setState({ loading: false })
    }


    render() {
        const { current } = this.state;
        let { loggedIn } = this.props
        if (!loggedIn) return null
        return (
            <div >
                <div className="black"></div>

                <div className="apply">
                    <h2 style={{ color: "red" }}>{this.state.error}</h2>
                    <div className="apply-box">
                        <div>
                            <Steps current={current} >
                                {steps.map(item => (
                                    <Step key={item.title} title={item.title} />
                                ))}
                            </Steps>
                            <div className="steps-content">{steps[current].content}</div>
                            <div className="steps-action">
                                {current > 0 && (
                                    <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                        Anterior
                                    </Button>
                                )}{current < steps.length - 1 && (
                                    <Button type="primary" onClick={this.validate}>
                                        Siguiente
                                    </Button>
                                )}
                                {current === steps.length - 1 && (
                                    <Button type="primary" disabled={this.state.loading} onClick={this.makePurchase}>
                                        {this.state.loading ? <Spin /> : "Confirmar"}
                                    </Button>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

function mapState({ user: { loggedIn, error }, bootcamps: { student, fetching, current } }) {
    return {
        loggedIn,
        student,
        fetching,
        bootcamp: current,
        error
    }
}

export default connect(mapState, { makeBootcampPurchaseAction })(Apply)