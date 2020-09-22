import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../actions'

const imagePlaceholderUrl = "https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png"


const Product = (props) => {

    const p = props.p

    return (
        <li className="product-item">

            <h3 className="product-title">{p.title}</h3>

            <img className="img" src={p.image || imagePlaceholderUrl} />
            <button 
                className="button" 
                onClick={() => { 
                    props.dispatch(addToCart(p.id)) 
                }}>
                Add to cart
            </button>
        </li>
    )
}

export default connect()(Product)