import React from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import moment from 'moment'
import styles from './admin.module.css'
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark'
import Button from '../common/Button'
import { Modal, InputNumber, Input, Switch, DatePicker, Form} from 'antd'
import { formatMoney } from '../../tools/formatMoney'
import toastr from 'toastr'

// internal
const NewCodeModal = ({onOk = ()=>false,show=false, onCancel}) => {
    const [form, setForm] = React.useState({
        name:'',
        amount:null,
        discount:10,
        validUntil:null
    })
    const [isAmount, setIsAmount] = React.useState(false)
    const [errors, setErrors] = React.useState({})

    const onChange = ({target:{name, value}}) => {
        if(name === 'name'){
            return setForm({...form, name: value.toUpperCase()})
        }
        setForm({...form, [name]:value})
    }

    const onFinish = () => {
        const err = {}
        if(!form.name || form.name === ''){
            err.name = "Ingresa un nombre para el cupon"
        }
        if(!form.discount || form.discount === ''){
            err.discount = "Ingresa un porcentaje"
        }
        // if(!form.amount || form.amount === ''){
        //     err.amount = "Ingresa una cantidad"
        // }
        if(!form.validUntil || form.validUntil === ''){
            err.validUntil = "Ingresa una Fecha"
        }
        setErrors(err)
        if(!(!!Object.keys(err).length)) {
            onOk({
                ...form,
                value:form.discount
            })
        }
        
    }

    return (
        <Modal
            onCancel={onCancel}
            onOk={onFinish}
            visible={show}
            title="Nuevo código"
        >
            <div className={styles.container}>
                <Form.Item
                    validateStatus={errors.name && 'error'}
                    help={errors.name}
                    >
                        <Input 
                            onChange={onChange} value={form.name} name='name' placeholder="Nombre del cupón" />
                </Form.Item>
                <span> <Switch onChange={()=>setIsAmount(is=>!is)} /> Cantidad </span>
               
                {!isAmount ? 
                                <Form.Item
                                validateStatus={errors.discount && 'error'}
                                help={errors.discount}
                                >
                <InputNumber
                        name='discount'
                        value={form.discount}
                        min={10}
                        max={80}
                        formatter={value => `${value}%`}
                        parser={value => value.replace('%', '')}
                        onChange={value=>onChange({target:{name:'discount', value}})}
                    /> 
                    </Form.Item>
                    : 
                    <Form.Item
                    validateStatus={errors.amount && 'error'}
                    help={errors.amount}
                    >
                    <InputNumber
                        name='amount'
                        fullWidth
                        value={form.amount}
                        min={500}
                        max={11000}
                        formatter={value => `$${value}`}
                        parser={value => value.replace('$', '')}
                        onChange={value=>onChange({target:{name:'amount', value}})}
                    />
                    </Form.Item>}
                    <h4>Valido hasta:</h4>
                    <Form.Item
                        validateStatus={errors.validUntil && 'error'}
                        help={errors.validUntil}
                    >
                    <DatePicker 
                        name='validUntil'
                        value={form.validUntil}
                        onChange={value=>onChange({target:{name:'validUntil', value}})}
                        format="ll"
                    />
                    </Form.Item>
            </div>
        </Modal>
    )
}

const DiscountCodes = ({}) => {
    const [showModal, setShowModal] = React.useState(false)
    const [coupons, setCoupons] = React.useState([])
    const {token} = useSelector(({user})=>user)
    React.useEffect(()=>{
        const getCoupons = () => {
            return axios.get(`${process.env.REACT_APP_BACKEND_ROUTE}/cupons`, {headers:{Authorization:token}})
            .then(({data})=>{
                console.log(data)
                setCoupons(data.reverse())
            })
            .catch(err=>{
                console.log(err)
            })
        }
        getCoupons()
    },[])

    const getCoupons = () => {
        return axios.get(`${process.env.REACT_APP_BACKEND_ROUTE}/cupons`, {headers:{Authorization:token}})
        .then(({data})=>{
            setCoupons(data.reverse())
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const deleteCode = (id) => {
        if(!window.confirm("¿Estas segura de eliminar este cupon?")) return
        return axios.delete(`${process.env.REACT_APP_BACKEND_ROUTE}/cupons/${id}`,
        {headers:{Authorization:token}})
        .then(({data})=>{
            getCoupons()
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const addCode = (item) => {
        setShowModal(false)
        return axios.post(`${process.env.REACT_APP_BACKEND_ROUTE}/cupons`,
        item,
        {headers:{Authorization:token}})
        .then(({data})=>{
            setCoupons(coupons=>[data, ...coupons])
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (<section style={{padding:'0 100px'}}>
         <h3>Lista de códigos          
             <Button 
                onClick={()=>setShowModal(true)}
                style={{marginLeft:20}}
                variant='circular'
                text="+"
         />
         </h3>

         <article className={styles.container}>
            <div className={styles.row}>
                <h4>Código</h4>
                <h4>Porcentaje / Cantidad</h4>
                <h4>Caducidad</h4>
                <h4>Eliminar</h4>
            </div>
            <div className={styles.container}>
                {coupons.map((cu,i)=>(
                    <div key={i}>
                    <div className={styles.row}>
                    <p
                        onClick={()=>{
                            toastr.info(`${cu.name} copiado al portapapeles`)
                            navigator.clipboard.writeText(`https://fixter.camp/promo/aprendejs?code=${cu.name}`)
                        }}
                    >{cu.name}</p>
                    <p>{!cu.amount ? `${cu.value}%` : formatMoney( cu.amount)}</p>
                    <p> {cu.validUntil ? moment(cu.validUntil).format('ll'): moment(cu.createdAt).format('ll')} </p>
                    <button 
                        onClick={()=>deleteCode(cu._id)}
                        className={styles.deleteButton}>X</button>
                    </div>
                    <hr style={{width:'100%'}}/>
                    </div>
                ))}
            </div>
         </article>

       <NewCodeModal 
        onCancel={()=>setShowModal(false)}
       show={showModal}
        onOk={addCode}
       />
    </section>)
}

const PaymentsPage = ({}) => {
    return ( 
        <div>
            <DiscountCodes />
        </div>
     );
}
 
export default PaymentsPage;