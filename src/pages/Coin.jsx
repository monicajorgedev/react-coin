import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Coin = () => {
    const {id} = useParams()
    const [coin, setCoin] = useState('')
    const [alreadyFavorite, setAlreadyFavorite] = useState(false)
  
    let favorites = []
    if(localStorage.getItem('favorites') !== null) {
        favorites = JSON.parse(localStorage.getItem('favorites'))
    }
    useEffect(() => {
        if (favorites.find(f => f.id === id)) {
            setAlreadyFavorite(true)
        }
    }, [])
    useEffect(()=> {
        const getCoin = async () => {
            try {
                const response = await fetch(`https://api.coincap.io/v2/assets/${id}`)
                if(!response.ok) {
                    throw new Error('Ha surgido un error', response.status)
                }
                const data = await response.json()
                setCoin(data.data)
                console.log(coin)
            } catch (err) {
                console.log('Error al obtener los datos', err)
            }
        }
        getCoin()
        },[])

    const addFavorites = () => {
        favorites.push(coin)
        localStorage.setItem('favorites', JSON.stringify(favorites))
        setAlreadyFavorite(true)
    }

    const deleteFavorites = () => {
        favorites = favorites.filter((coin)=> coin.id !== id)
        localStorage.setItem('favorites', JSON.stringify(favorites))
        setAlreadyFavorite(false)
    }
    
    return (
        <>
        <h2>{coin.name}</h2>
        <p>Rank: {coin.rank}</p>
        <p>Symbol: {coin.symbol}</p>
        <p>Price: {Math.round(coin.priceUsd*10000)/10000} $</p>
        {!alreadyFavorite ? <button onClick={addFavorites}>Añadir a favoritos</button>: ''}
        {alreadyFavorite ? <button onClick={deleteFavorites}>Eliminar de favoritos</button>: ''}
        </>
        
    )
}

export default Coin