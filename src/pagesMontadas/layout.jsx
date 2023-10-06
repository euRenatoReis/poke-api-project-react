
import { BotaoTema, BotaoVoltar } from '../botoes/botoes';
import React, { useContext } from 'react'
import styled from 'styled-components';
import { ThemeContext } from '../services/trocarTema';
import { Outlet } from 'react-router-dom';


const Layout = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <LayoutEstilizado theme={theme}>
            <header className="App-header">
                <BotaoTema />
                <BotaoVoltar/>
            </header>
            <Outlet />
        </LayoutEstilizado>
    )
}

const LayoutEstilizado = styled.div`


    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${props => props.theme.primaria.borderPrimaria};
    background-image: url(${props => props.theme.especificos.fundoImagem});
    background-size: cover;
    max-width: 100vw;
    min-height: 100vh;
    gap: 10px;
    
    

 header{
    padding: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
 }

 a{
    color: ${props => props.theme.primaria.colorPrimaria};
 }

 a:visited{
    color: ${props => props.theme.primaria.colorPrimaria};
 }
 

`


export { Layout }