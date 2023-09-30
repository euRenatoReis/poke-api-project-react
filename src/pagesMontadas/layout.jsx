
import { BotaoTema } from '../botoes/botoes';
import React, { useContext } from 'react'
import styled from 'styled-components';
import { ThemeContext } from '../services/trocarTema';
import { Outlet } from 'react-router-dom';


const Layout = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <LayoutEstilizado theme={theme}>
            <header className="App-header">
                <BotaoTema />
            </header>
            <Outlet/>
        </LayoutEstilizado>
    )
}

const LayoutEstilizado = styled.div`


    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${props => props.theme.primaria.borderPrimaria};
    background-color: ${props => props.theme.secundaria.backgroundSecundaria};
    border: ${props => props.theme.primaria.borderPrimaria};
    max-width: 100vw;
    min-height: 100vh;
    gap: 10px;
    
    

 header{
    padding: 20px;
 }
 

`


export { Layout }