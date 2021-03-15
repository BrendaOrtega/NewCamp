import React from 'react';
import {Skeleton, Spin} from 'antd'
import Button from '../common/Button';
import tag from "../../assets/tag.svg"
import {useDispatch, useSelector} from 'react-redux'
import { getEditionBySlugAction, getEditionsAction, getOneEditionAction, validateDiscountCodeAction } from '../../redux/bootcampDuck';
import TextSkeleton from './internal/TextSkeleton'
import queryString from 'query-string'
import toastr from 'toastr'

import "./Payment.css"
import { formatMoney } from '../../tools/formatMoney';

const Payment = ({match, location:{search}}) => {
    const dispatch = useDispatch()
    const {coupon, editions = [], edition, edition:{bootcamp={}}, fetching} = useSelector(({bootcamps})=>bootcamps)

    const [discount, setDiscount] = React.useState(0)
    const [form, setForm] = React.useState({
        coupon:'',
        months:1
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
    },[])

    React.useEffect(()=>{
        if(editions.length > 0) {
            dispatch(getOneEditionAction(editions[0]._id))
        }
        
    }, [editions])

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
                console.log("resul: ", res)
                if(res.isValid===false) toastr.info('El código ha expirado') 
                else if(res.isValid===undefined)  toastr.error('Código NO valido')
                else toastr.success(`Código ${code} válido y aplicado`)
                // setForm({...form, coupon:code})
            }
        })
    }

    const calculateDiscount = () => {
        if(!edition.price) {
            return 0
        }
        return coupon.amount ? Number(coupon.amount) : (Number(edition.price) * Number(coupon.value) ) /100  
    }

    const handleSubmit = () => {
        console.log("validate form")
    }

    const handleChange = ({target:{name, value}}) => {
        if(name==='coupon'){
            return setForm({...form, [name]:value.toUpperCase()})
        }
        setForm({...form, [name]:value})
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
                    <input placeholder="Nombre completo"/>    
                    <hr/>
                    <h5>
                        Información de tarjeta
                    </h5>
                    <input placeholder="Nombre del titular de la tarjeta"/>    
                    <input placeholder="Número de tarjeta"/>    
                    <input id="inp" placeholder="Fecha de vencimiento"/>    
                    <input id="inp" style={{marginLeft:"4%"}} placeholder="CVV" />    
                    <br/>
                    <select onChange={handleChange} value={form.months} name="months" placeholder="Nombre completo">
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
                        {form.months > 1 && <div className="quantity">
                            <p>
                                Tipo de pago:
                            </p>
                            <p style={{color:"#323232"}}>
                                {form.months} Meses sin intereses
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