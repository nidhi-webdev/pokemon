import React from 'react'

const PokemonCards = ({ curPokemon }) => {
    // console.log(props);

    return (
        <div className='flex flex-col items-center bg-white shadow-lg rounded-lg p-4 m-4 w-48'>
            <img
                src={curPokemon.sprites?.front_default}
                alt={curPokemon.name}
                className="w-24 h-24 object-contain mb-2" />
            <h2 className="text-xl font-bold capitalize mb-1">{curPokemon.name}</h2>




            {/* <li key={curPokemon.id} > {curPokemon.name} </li> */}
        </div>
    )
}

export default PokemonCards
