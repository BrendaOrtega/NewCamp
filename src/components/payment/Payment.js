import React from 'react';
import {Skeleton, Spin} from 'antd'
import Button from '../common/Button';
import tag from "../../assets/tag.svg"
import {useDispatch, useSelector} from 'react-redux'
import { getEditionBySlugAction, getEditionsAction, getOneEditionAction, purchaseEditionAction, validateDiscountCodeAction } from '../../redux/bootcampDuck';
import TextSkeleton from './internal/TextSkeleton'
import queryString from 'query-string'
import toastr from 'toastr'

import "./Payment.css"
import { formatMoney } from '../../tools/formatMoney';

const Payment = ({history, match, location:{search}}) => {
    const dispatch = useDispatch()
    const {coupon, editions = [], edition, edition:{bootcamp={}}, fetching} = useSelector(({bootcamps})=>bootcamps)
    const [error, setError] = React.useState(true)
    const [discount, setDiscount] = React.useState(0)
    const [form, setForm] = React.useState({
        coupon:'',
        monthly_installments:1,
        cvc:'',
        phone:''
    })

    React.useEffect(()=>{
        const {id = null, slug = null} = match.params
        const {code} = queryString.parse(search)       
        if(id === null && slug === null){
            dispatch(getEditionsAction())
        } else if (slug) {
            dispatch(getEditionBySlugAction(slug))
        } else if (id) {
            dispatch(getOneEditionAction(id))
        }
        if(!(code === null || code === undefined)){
            validateDiscountCode(code)
            // setForm({...form, coupon:code})
        }
        setConekta()
    },[])

    React.useEffect(()=>{
        if(editions.length > 0) {
            dispatch(getOneEditionAction(editions[0]._id))
        }
        
    }, [editions])

    const setConekta = () => {
        // conekta
        let script = document.createElement('script')
        script.src = "https://cdn.conekta.io/js/latest/conekta.js"
        script.async = true
        document.body.appendChild(script)
        script.onload = () => {
            window.Conekta.setPublicKey(process.env.REACT_APP_CONEKTA_PUBLIC_KEY)
        }
    }

    const validateDiscountCode = (code=null) => {
        if(typeof code !== 'string' || code === null) {
            if( !form.coupon || form.coupon === ''){
                return
            }
            code = form.coupon
        }
        setForm({...form, coupon:''})
        dispatch(validateDiscountCodeAction(code))
        .then(res=>{
            if(res){
                if(res.isValid===false) toastr.info('El código ha expirado') 
                else if(res.isValid===undefined)  toastr.error('Código NO valido')
                else toastr.success(`Código ${code} válido y aplicado`)
                // setForm({...form, coupon:code})
            }
        })
    }

    const calculateDiscount = () => {
        if(!edition.price || !Object.keys(coupon).length) {
            return 0
        }
        return coupon.amount ? Number(coupon.amount) : (Number(edition.price) * Number(coupon.value) ) /100  
    }

    const handleSubmit = () => {
        console.log("por ahora: ", form)
        let err = null
        if(!form.phone || form.phone.length<10) err = 'Ingresa tu número de teléfono de 10 dígitos'
        if(!form.cvc || form.cvc.length<3) err = 'Ingresa el número de seguridad (CVC)'
        if(!form.cardDate || form.cardDate.length<4) err = 'Ingresa una fecha válida'
        if(!form.cardNumber) err = 'Ingresa un número de tarjeta válido'
        if(!form.cardName) err = 'Ingresa el nombre que aparece en la tarjeta'
        setError(err)
        if(!err){
            console.log("se envía: ", form)
            makePurchase()
        }
        
    }

    const handleChange = ({target:{name, value}}) => {
        if(name==='coupon'){
            return setForm({...form, [name]:value.toUpperCase()})
        }
        if(name==='cvc') {
            value = value.slice(0,3)
            setForm({...form, [name]:value})
        }
        if(name==='cardDate') {
            value = String(value).replace('/', '')
            if(value.length<3) return  setForm({...form, [name]:value})
            value = value.slice(0,6)
            return setForm({...form, [name]:`${value.slice(0,2)}/${value.slice(2)}`})
        }
        setForm({...form, [name]:value})
    }


    const makePurchase = () => {
        // create form
        let payload = {
            "card": {
                "number": form.cardNumber,
                "name": form.cardName,
                "exp_year": form.cardDate.split('/')[1],
                "exp_month": form.cardDate.split('/')[0],
                "cvc": form.cvc
            }
        }
        // tokenize
        window.Conekta.Token.create(
            payload,
            conektaSuccessResponseHandler,
            conektaErrorResponseHandler
        );
        // send to backend
        // loading
        // redirect
    }

    const conektaSuccessResponseHandler = token => {
        console.log("success token: ", token)
        // action para enviar token
        dispatch(purchaseEditionAction({ coupon:coupon.name,tokenId: token.id, bootcampId: edition._id, ...form }))
            .then(res => {
                if(res) {
                    toastr.success("Pago realizado con éxito.")
                    history.push('/profile')
                } 
                else toastr.error("No se pudo cobrar, intenta de nuevo")
                // this.props.history.push('/profile')
            })
    }
    const conektaErrorResponseHandler = (response) => {
        toastr.error(response.message_to_purchaser);
    }


    return (
        <div className="payment">
            <div className="black"></div>
            <br/>
            <div className="payment-card">
                <form 
                onSubmit={e=>{e.preventDefault();handleSubmit()}}
                className="payment-data"
                >
                    <h4>
                        <TextSkeleton text={bootcamp.title} />
                    </h4>
                    <p>
                        <TextSkeleton text={edition.body} />
                    </p>
                    {/* <input placeholder="Nombre completo"/>     */}
                    <hr/>
                    <h5>
                        Información de tarjeta
                    </h5>
                    {error && <p style={{color:'red'}}>{error}</p>}
                    <input 
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Ingresa tu número telefónico"/>   
                    <input 
                        name="cardName"
                        value={form.cardName}
                        onChange={handleChange}
                        placeholder="Nombre del titular de la tarjeta"/>    
                    <input 
                        name="cardNumber"
                        value={form.cardNumber}
                        onChange={handleChange}
                        placeholder="Número de tarjeta"/>    
                    <input 
                        name="cardDate"
                        value={form.cardDate}
                        onChange={handleChange}
                        id="inp" placeholder="Fecha de vencimiento"/>    
                    <input 
                        name="cvc"
                        value={form.cvc}
                        onChange={handleChange}
                        id="inp" style={{marginLeft:"4%"}} placeholder="CVC" />    
                    <br/>
                    <select onChange={handleChange} value={form.monthly_installments} name="monthly_installments" placeholder="Nombre completo">
                        <option value="1" >Contado</option>
                        <option value="3">3 meses sin intereses</option>
                        <option value="6">6 meses sin intereses</option>
                        <option value="9">9 meses sin intereses</option>
                        <option value="12">12 meses sin intereses</option>
                    </select>   
                    <br/> 
                    <br/> 
                    <div style={{textAlign:"center"}}>
                        <Button
                        // disabled={error}
                        type="submit"
                        text="Pagar"/>  
                    </div>
                
                </form>
                <div className="payment-summary">
                    <div className="summary-box">
                        <h5>Curso de Desarrollo Web</h5>
                        <div className="quantity">
                            <p>
                                Precio
                            </p> 
                            <p style={{color:"#323232"}}>
                                {formatMoney(edition.price)}
                            </p>
                        </div>
                        <div className="quantity">
                            <p>
                                Descuento
                                {" "}[{coupon.name}]
                            </p> 
                            <p style={{color:"#323232"}}>
                                {formatMoney(calculateDiscount())}
                            </p>
                        </div>
                        {form.monthly_installments > 1 && <div className="quantity">
                            <p>
                                Tipo de pago:
                            </p>
                            <p style={{color:"#323232"}}>
                                {form.monthly_installments} Meses sin intereses
                            </p>
                        </div>}
                        <hr style={{marginTop:"12px !important"}}/>
                        <p style={{color:"#323232"}}><img src={tag}/> ¿Tienes un código de descuento?</p>
                        <div className="code">
                            <input
                                onChange={handleChange}
                                style={{color:'#A72E36'}}
                                value={form.coupon}
                                name='coupon'
                                placeholder="Ingresa tu código"/>
                                <Button
                                    onClick={validateDiscountCode}    
                                >Canjear</Button>
                        </div>
                    </div>
                    <p className="total">Total {formatMoney(edition.price - calculateDiscount(),true)}</p>
                </div>
            </div>
        </div>
    )
    }


export default Payment;