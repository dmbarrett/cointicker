import{
    REQUEST_COINS_PENDING,
    REQUEST_COINS_SUCCESS,
    REQUEST_COINS_FAILED,
} from './constants.js'

const initialStateCoins = {
    coins: [],
    isPending: false,
    error: ''
}

export const requestCoins = (state=initialStateCoins, action={}) => {
    switch(action.type) {
        case REQUEST_COINS_PENDING:
            return Object.assign({}, state, { isPending:true })
        case REQUEST_COINS_SUCCESS:
            return Object.assign({}, state, {coins: action.payload, isPending: false})
        case REQUEST_COINS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state
    }
}