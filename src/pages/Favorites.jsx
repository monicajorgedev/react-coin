import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Favorites = () => {
    const [favorites, setFavorites] = useState([])

    useEffect(()=> {
        const storedFavorites = localStorage.getItem("favorites")
        if (storedFavorites !== null) {
            setFavorites(JSON.parse(storedFavorites))
        }
    }, [])
    
    return (
        <>
        <h2>Favoritas</h2>
        {favorites.length === 0 ? <p>No hay criptomonedas favoritas</p>:''}
            <ol>
                {favorites.map((coin)=> {
                    return (
                        <li key={coin.id}>
                            <Link to={`/coin/${coin.id}`}>{coin.name}</Link>
                        </li>
                    )
                })}

            </ol>
        </>
    )
}

export default Favorites