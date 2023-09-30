
import React, {useContext} from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../services/trocarTema'

const NoPage = () => {

  const { theme } = useContext(ThemeContext)

  return (

    <NoPageStyled className='no-page-screen' theme={theme}>
      Pagina Não encontrada
    </NoPageStyled>

  )
}

const NoPageStyled = styled.div`

.no-page-screen{

  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

`

export { NoPage }
