
import { Link, Outlet } from 'react-router-dom';
import { BotaoTema } from '../botoes/botoes';
import React, { useContext } from 'react'
import styled from 'styled-components';
import { ThemeContext } from '../services/trocarTema';


const Layout = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <CabecalhoEstilizado theme={theme}>
            <header className="App-header">
                <BotaoTema />
            </header>
            <p><Link to="/" />Home</p>
            <Outlet />
        </CabecalhoEstilizado>
    )
}

const CabecalhoEstilizado = styled.div`


    display: flex;
    justify-content: center;
    align-itens: center;
    flex-direction: column;
    color: ${props => props.theme.primario.borderPrimaria};
    background-color: ${props => props.theme.secundario.backgroundSecundaria};
    border: solid 2px ${props => props.theme.primario.borderPrimaria};
    height: 200px;
    width: 100%;
 
    
 header{
    padding: 20px;
 }
    
 nav{
    background: none;
 }
    
 ul{
    list-style: none;
    display: flex;
    flex-direction: row;
 }
    

`


export { Layout }