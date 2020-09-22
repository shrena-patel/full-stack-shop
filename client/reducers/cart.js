import { ADD_TO_CART } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const itemInCart = state.find(item => {
                return item.product_id == action.id
            })
            if(itemInCart) {
                return state.map(item => {
                    if(item.product_id == action.id) {
                        item.quantity++
                    }
                    return item
                })
            }
            return [...state, { product_id: action.id, quantity: 1 }]
        default:
            return state
    }
}

export default reducer