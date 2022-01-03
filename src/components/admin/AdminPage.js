import React from 'react'
import AdminRoutes from './AdminRoutes'
import AdminMenu from './AdminMenu'

export default function AdminPage() {
    // login?
    return (
        <div style={{ paddingTop: 100 }}>
            <h1>Admin</h1>
            <div style={{ paddingLeft: 100, maxWidth: 1200, margin: "0 auto", minHeight: 500 }}>
                <AdminRoutes />
            </div>
            <AdminMenu />

        </div>
    )
}