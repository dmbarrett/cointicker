import{
    REQUEST_COINS_PENDING,
    REQUEST_COINS_SUCCESS,
    REQUEST_COINS_FAILED,
} from './constants.js'

export const requestCoins = () => (dispatch) => {
    dispatch({type: REQUEST_COINS_PENDING})
    fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        .then(response => response.json())
        .then(data => dispatch({
            type: REQUEST_COINS_SUCCESS,
            payload: data
        }))
        .catch(error => dispatch({
            type: REQUEST_COINS_FAILED,
            payload: error
        }))
}