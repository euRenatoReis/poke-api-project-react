
import React, { useState } from 'react'


const PokePage = async (/* props */) => {

    /* const { resultsSearch } = props */

    return (
        <div>
          {/*   <div className='linha-1'>
                <picture>
                    <source srcSet={resultsSearch.sprites.front_default}></source>
                    <img src={resultsSearch.sprites.front_default} alt='foto do pokemon'></img>
                </picture>

                <div className='identificacao'>
                    <div className='nome-tipos'>
                        <h1>{resultsSearch.name}</h1>
                        <p>{resultsSearch.types.map((tipo) => {

                            return tipo.type.name
                        })}</p>
                    </div>
                    <div className='abilidades'>
                        {
                            resultsSearch.abilities.forEach((ability) => {

                                return ability.name

                            })
                        }
                    </div>
                </div>
            </div>
            <div className='linha-2'>

                <div className='lista-moves'>
                    {
                        resultsSearch.moves.forEach((movimento) => {

                            return movimento.move.name
                        })
                    }
                </div>

                <div className='sprites'>


                </div>
            </div> */}
        </div>
    )
}

export { PokePage }