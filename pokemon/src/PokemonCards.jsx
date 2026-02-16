import React from 'react'

const PokemonCards = ({ curPokemon }) => {

    return (
        <div className='flex flex-col items-center bg-white shadow-lg rounded-lg p-4 m-4 w-70 hover:bg-blue-100  hover:scale-105 cursor-pointer'>
            <img
                src={curPokemon.sprites?.other?.dream_world?.front_default}
                alt={curPokemon.name}
                className="w-24 h-24 object-contain mb-2" />
            <h2 className="text-xl font-bold capitalize mb-1">{curPokemon.name}</h2>
            <button className='bg-green-500 px-3 py-3 rounded-2xl text-white mt-5 cursor-pointer'> {curPokemon.types.map((curTypes) => curTypes.type.name).join(',')}</button>
            <div className='mt-4 flex justify-between w-full text-sm px-2 gap-1'>
                <span className="whitespace-nowrap"><b>Height:</b> {curPokemon.height}</span>
                <span className="whitespace-nowrap"><b>Weight:</b> {curPokemon.weight}</span>
                <span className="whitespace-nowrap"><b>Speed:</b> {curPokemon.stats[5].base_stat}</span>
            </div>

            <div className='mt-4 flex justify-between w-full text-sm px-2 gap-1'>
                <span className="whitespace-nowrap"> <b>Experience:</b> <br />{curPokemon.base_experience}</span>
                <span className="whitespace-nowrap"> <b>Attack:</b> <br /> {curPokemon?.stats[1]?.base_stat}</span>
                <span className="whitespace-nowrap"> <b>abilities:</b>  <br /> {curPokemon.abilities.map((abilitiesName) => abilitiesName.ability.name).slice(0,1).join(",")}</span>
            </div>
        </div>
    )
}

export default PokemonCards
