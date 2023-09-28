
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
  justify - content: center;
  align - itens: center;
}

`

export { NoPage }
