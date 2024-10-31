import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Home () {
    const [coins, setCoins] = useState([])

    useEffect(()=> {
    const getCoins = async () => {
        try {
            const response = await fetch('https://api.coincap.io/v2/assets')
            if(!response.ok) {
                throw new Error('Ha surgido un error', response.status)
            }
            const data = await response.json()
            setCoins(data.data)
        } catch (err) {
            console.log('Error al obtener los datos', err)
        }
    }
    getCoins()
    },[])
    
    return (
        <>
            <h1>
                Bienvenido a Cripto
            </h1>
            <h2>Lista de las principales criptomonedas</h2>
            <ol>
                {coins.map((coin)=> {
                    return (
                        <li key={coin.id}>
                            <Link to={`coin/${coin.id}`}>{coin.name}</Link>
                        </li>
                    )
                })}

            </ol>
        </>
    )
}

export default Home