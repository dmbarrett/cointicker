import React from 'react'

const CoinList =({coins, isPending})=> {
    if(!isPending){
        const ticker = coins.ticker
        console.log(ticker)
    }
    
    
    return (
        <div>
            {/* <h1>{coins.base}</h1>
            <h2>{coins.volume}</h2>
            <h3>{coins.price}</h3>
            <h4>{coins.change}</h4>
            <p></p> */}
        </div>
    )
}

export default CoinList