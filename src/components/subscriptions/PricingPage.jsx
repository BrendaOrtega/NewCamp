import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Pricing from './Pricing'
import axios from 'axios'

const PricingPage = ({ history }) => {
    const [loading, setLoading] = React.useState(false)
    const { token } = useSelector(({ user }) => user)

    const routeToCheckout = async (yearly, priceId) => {
        setLoading(true)
        if (!token) {
            return history.push(`/registro?next=/pricing`)
        }
        if (yearly) {
            // history.push('/pricing/anual')
            window.location.replace(`${process.env.REACT_APP_BACKEND_ROUTE}/create-checkout-session/yearly?id=${priceId}&token=${token}`)
            // window.location.replace(`http://localhost:8000/create-checkout-session/yearly?id=${priceId}&token=${token}`)
        }
    }
    return (
        <Pricing loading={loading} onYearly={() => routeToCheckout(true, 'price_1KBnjEJ7Zwl77Lqn0WnPPcsX')} onMonthly={() => routeToCheckout(false, 'price_1KBni2J7Zwl77LqnLMKffoNy')} />
    )
}

export default PricingPage