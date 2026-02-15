import React from 'react'

const PokemonCards = ({ curPokemon }) => {

    return (
        <div className='flex flex-col items-center bg-white shadow-lg rounded-lg p-4 m-4 w-70 hover:bg-blue-100  hover:scale-105 cursor-pointer'>
            <img
                src={curPokemon.sprites?.other?.dream_world?.front_default}
                alt={curPokemon.name}
                className="w-24 h-24 object-contain mb-2" />
            <h2 className="text-xl font-bold capitalize mb-1">{curPokemon.name}</h2>
            <button className='bg-green-500 px-3 py-3 rounded-4xl text-white'> {curPokemon.types.map((curTypes) => curTypes.type.name).join(',')}</button>
            <div>
                <span> Height  {curPokemon.height} </span>
                <span> Weight  {curPokemon.weight} </span>
                <span> Speed  {curPokemon.stats[5].base_stat} </span>
            </div>


        </div>
    )
}

export default PokemonCards
