
import { Link, Outlet } from 'react-router-dom';
import { BotaoTema } from '../botoes/botoes';
import React from 'react'



const Layout = () => {



    return (
        <div className='cabecalho'>
            <header className="App-header">
                <BotaoTema />
            </header>
            <nav>
                <ul>
                    <li><Link to="/" />Home</li>
                    <li><Link to="/poke-page" />pokePage</li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export { Layout }