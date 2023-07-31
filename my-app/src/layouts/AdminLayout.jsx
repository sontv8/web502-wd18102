import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div>
            <aside>
                <ul>
                    <li><a href="">List Item</a></li>
                    <li><a href="">List Item</a></li>
                    <li><a href="">List Item</a></li>
                    <li><a href="">List Item</a></li>
                    <li><a href="">List Item</a></li>
                </ul>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout