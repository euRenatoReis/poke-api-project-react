
import createGlobalStyle from "styled-components";


export default createGlobalStyle`

.cabecalho{
display: flex;
justify-content: center;
align-itens: center;
flex-direction: column;
color: ${props => props.theme.primario.borderPrimaria};
background-color: ${props => props.theme.secundario.backgroundSecundaria};
border: solid 2px ${props => props.theme.primario.borderPrimaria};
height: 200px;
width: 100%;
} 

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

.pokedex-main{

     width: 100%;
     display: flex; 
     align-items: center;
     justify-content: center;
     flex-direction: column;
     gap: 10px;
     background-color: #F46646;
     list-style: none;
     border-radius: 0px;
}


.lista-pokedex{

     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     width: 80%;
     gap: 20px;
}

.list-card-pokemon{

width: 250px;
height: 300px;
display: flex;
flex - direction: column;
border - radius: 14px;
border: solid 2px ${props => props.theme.primario.borderPrimaria};
}

.picture-pokemon{

display: flex;
width: 100 %;
height: 60 %;
align - content: center;
justify - content: center;
background - color: ${props => props.theme.especificos.fundoPokedex};
border - top - left - radius: 14px;
border - top - right - radius: 14px;

}

.barra-inferior-card{
width: 100 %;
height: 40 %;
background - color: black;
border - top: solid 5px ${props => props.theme.primario.borderPrimaria};
border - bottom - left - radius: 14px;
border - bottom - right - radius: 14px;
color: ${props => props.theme.primario.borderPrimaria};
background - color: ${props => props.theme.secundario.backgroundSecundaria};
}

.botao-carregar-mais{
     width: 190px;
     height: 40px;
     border - radius: 20px;
     color: ${props => props.theme.primario.borderPrimaria};
     background - color: ${props => props.theme.secundario.backgroundSecundaria};
     border: solid 2px ${props => props.theme.primario.borderPrimaria};
}

.botao-tema{

width: 80px;
height: 80px;
color: ${ props => props.theme.primario.borderPrimaria };
background - color: ${ props => props.theme.secundario.backgroundSecundaria };
border: solid 2px ${ props => props.theme.primario.borderPrimaria };
border - radius: 40px
}

.PrimeiraLinhaPokepage {
   display: flex;
   flex - direction: row;
   background - color: ${ props => props.theme.especificos.fundoPokedex };}


.no-page-screen{

display: flex;
justify - content: center;
align - itens: center;

}

`