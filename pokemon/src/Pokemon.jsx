import { useState, useEffect } from "react"

const Pokemon = () => {
    // const [PokemonData, setPokemonData] = useState("")


    const PokemonApi = "https://pokeapi.co/api/v2/pokemon?limit=24"

    const fetchApi = async () => {
        try {
            const res = await fetch(PokemonApi)
            const data = await res.json()

            const detailedPokemonData = data.results.map(async (curPokemon) => {
                const res = await fetch(curPokemon.url)
                const data = await res.json()
                return data
            })
            console.log(detailedPokemonData)
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        fetchApi()
    }, [])


    return (
        // <div className="bg-red-300 min-h-screen">
        <div className="flex flex-col items-center bg-blue-50 min-h-screen ">
            <h1 className="font-extrabold text-3xl mt-10"> Let's Catch Pokemon </h1>

            <div>
                <input type="text" placeholder="Search Pokemon" className="px-4 py-3 border-b-2 border-black pt-7 outline-0" />
            </div>
        </div>
        // </div>

    )
}

export default Pokemon
