import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext, themes } from "../services/trocarTema";
import styled from "styled-components";
import { FaSun, FaMoon, FaArrowRotateLeft } from "react-icons/fa6";


export const BotaoPaginaProxima = (props) => {

    const { theme } = useContext(ThemeContext);
    const { page, setPage, totalPages } = props;

    function ProximaPagina() {
        if (page + 1 !== totalPages) {
            setPage(page + 1)
        }
    }

    return (

        <EstilizaBotoesPaginacao theme={theme} onClick={() => ProximaPagina()} className="botao-carregar-mais">
            ▶️
        </EstilizaBotoesPaginacao>
    )
}

export const BotaoPaginaAnterior = (props) => {

    const { theme } = useContext(ThemeContext);
    const { page, setPage } = props;

    function AnteriorPagina() {
        if (page > 0) {
            setPage(page - 1)
        }
    }

    return (

        <EstilizaBotoesPaginacao theme={theme} onClick={() => AnteriorPagina()} className="botao-carregar-mais">
            ◀️
        </EstilizaBotoesPaginacao>
    )
}


export const BotaoTema = () => {

    const { theme, updateTheme } = useContext(ThemeContext);


    return (

        <EstilizaBotaoTema className="botao-tema" onClick={() => updateTheme(theme === themes.light ? themes.dark : themes.light)} theme={theme}>
            {
                theme === themes.light ? <FaSun/> : <FaMoon/>
            }
        </EstilizaBotaoTema>
    )
}

export const BotaoVoltar = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <EstilizaBotaoVoltar theme={theme}>
            <Link to={`/`}>
                <FaArrowRotateLeft />
            </Link>
        </EstilizaBotaoVoltar>
    )
}

const EstilizaBotaoTema = styled.button`

    display: flex;
    width: 80px;
    height: 50px;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.primaria.colorPrimaria};
    background-color: ${props => props.theme.primaria.backgroundPrimaria};
    border: ${props => props.theme.primaria.borderPrimaria};
    border-radius: 40px

`

const EstilizaBotaoVoltar = styled.button`

    display: flex;
    width: 90px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    color: ${props => props.theme.primaria.colorPrimaria};
    background-color: ${props => props.theme.primaria.backgroundPrimaria};
    border: ${props => props.theme.primaria.borderPrimaria};
`

const EstilizaBotoesPaginacao = styled.button`

    display: flex;
    width: 90px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    color: ${props => props.theme.secundaria.colorSecundaria};
    background-color: ${props => props.theme.primaria.backgroundPrimaria};
    border: ${props => props.theme.primaria.borderPrimaria};

`