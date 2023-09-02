import { styled } from "styled-components";


export const PokeDexEstilizada = styled.section`

     width: 100%;
     display: flex; 
     align-items: center;
     justify-content: center;
     flex-direction: column;
     gap: 10px;
     background-color: #F46646;
     list-style: none;
     border-radius: 0px;

`

export const ListaDaPokedexEstilizada = styled.ul`

     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     width: 80%;
     gap: 20px;
`

export const CardPokemonEstilizado = styled.li`

     width: 250px;
     height: 300px;
     display: flex;
     flex-direction: column;
     background-color: #F5E058;
     border-radius: 14px;
     border: solid 2px white;
`

export const PicturePokemonEstilizado = styled.picture`
     
     display: flex;
     width: 100%;
     height: 60%;
     align-content: center;
     justify-content: center;
     background-color: #89FF7F;
     border-top-left-radius: 14px;
     border-top-right-radius: 14px;

`

export const BarraInferiorCard = styled.div`

     width: 100%;
     height: 40%;
     background-color: black;
     border-top: solid 5px gray;
     border-bottom-left-radius: 14px;
     border-bottom-right-radius: 14px;
     color: white;
`

export const BotaoCarregarMaisEstilizado = styled.button`

      width: 190px;
      height: 40px;
      border-radius: 20px;
      color: white;
      background-color: #7F9CE6;
`


export const BotaoTemaEstilizado = styled.button`

      width: 40px;
      height: 40px;
      background-color: gray;
      border: solid 2px black; 
`
