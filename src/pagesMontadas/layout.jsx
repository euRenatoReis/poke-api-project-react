
import { BotaoTema } from '../botoes/botoes';
import React, { useContext } from 'react'
import styled from 'styled-components';
import { ThemeContext } from '../services/trocarTema';
import { Outlet } from 'react-router-dom';


const Layout = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <CabecalhoEstilizado theme={theme}>
            <header className="App-header">
                <BotaoTema />
            </header>
            <Outlet/>
        </CabecalhoEstilizado>
    )
}

const CabecalhoEstilizado = styled.div`


    display: flex;
    justify-content: center;
    align-itens: center;
    flex-direction: column;
    color: ${props => props.theme.primaria.borderPrimaria};
    background-color: ${props => props.theme.secundaria.backgroundSecundaria};
    border: solid 2px ${props => props.theme.primaria.borderPrimaria};
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