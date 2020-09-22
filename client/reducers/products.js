import {SET_PRODUCTS } from '../actions'

const initialState = [
    {
        id: 1,
        title: 'Product 1',
        image: '',
    },
    {
        id: 2,
        title: 'Product 2',
        image: '',
    },
]

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PRODUCTS:
            return action.products
        default:
            return state
    }
}

export default reducer