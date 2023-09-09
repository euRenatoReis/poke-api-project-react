
import { Link, Outlet } from 'react-router-dom';

import React from 'react'

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/"/>Home</li>
                    <li><Link to="/poke-page"/>pokePage</li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export { Layout }