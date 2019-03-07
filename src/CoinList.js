import React from 'react'

const CoinList =({coins, isPending})=> {
    if(!isPending){
        const ticker = coins.ticker
        console.log("coinlist: "+ticker)
    }
    
    
    return coins.ticker === undefined ? <h1>LOADING</h1> : (
        <div>
            <h1>{coins.ticker.base}</h1>
            <h2>{coins.ticker.volume}</h2>
            <h3>{coins.ticker.price}</h3>
            <h4>{coins.ticker.change}</h4>
            <p></p>
        </div>
    )
}

export default CoinList