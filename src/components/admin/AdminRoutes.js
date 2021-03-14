import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminUsers from './AdminUsers'
import AdminBootcamps from './AdminBootcamps'
import WeekView from './WeekView'
import WeekEdit from './WeekEdit'
import HomeWorkEdit from './HomeWorkEdit'
import PaymentsPage from './PaymentsPage'

export default function AdminRoutes() {
    return (
        <Switch>
            {/* 2021 */}
            <Route path='/admin/payments' component={PaymentsPage} />
            {/* 2019 */}
            <Route path="/admin/users" component={AdminUsers} />
            <Route path="/admin/bootcamps/:id" component={WeekView} />
            <Route path="/admin/weeks/:id/homework" component={HomeWorkEdit} />
            <Route path="/admin/weeks/:id" component={WeekEdit} />
            <Route exact path="/admin/bootcamps" component={AdminBootcamps} />
        </Switch>
    )
}