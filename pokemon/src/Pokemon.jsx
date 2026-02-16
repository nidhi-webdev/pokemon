import { useState, useEffect } from "react"
import PokemonCards from './PokemonCards'

const Pokemon = () => {
    const [pokemonData, setPokemonData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("")

    const PokemonApi = "https://pokeapi.co/api/v2/pokemon?limit=124"

    const fetchApi = async () => {
        try {
            const res = await fetch(PokemonApi)
            const data = await res.json()

            const detailedPokemonData = data.results.map(async (curPokemon) => {
                const res = await fetch(curPokemon.url)
                const data = await res.json()
                return data

            })
            const detailedResponse = await Promise.all(detailedPokemonData)
            console.log(detailedResponse)
            setPokemonData(detailedResponse)
            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(error)
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])

    if (loading) {
        return <h1 className="flex justify-center items-center font-bold text-3xl min-h-screen"> Loading... </h1>
    }

    if (error) {
        return <h1 className="flex justify-center items-center font-bold text-3xl min-h-screen"> {error.message} </h1>
    }

    const searchData = pokemonData.filter((curPokemon) => curPokemon.name.toLowerCase().includes(search.toLowerCase()))


    return (
        <div className="flex flex-col items-center bg-blue-50 min-h-screen ">
            <h1 className="font-extrabold text-3xl mt-10"> Let's Catch Pokemon </h1>

            <div>
                <input value={search} onChange={(e) => setSearch(e.target.value)}
                    type="text" placeholder="Search Pokemon" className="px-4 py-3 border-b-2 border-black pt-7 outline-0" />
            </div>

            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                    {
                        searchData.map((curPokemon) => {
                            return <PokemonCards key={curPokemon.id} curPokemon={curPokemon} />
                        })
                    }

                </div>
            </div>
        </div>

    )
}

export default Pokemon
