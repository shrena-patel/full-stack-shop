import React from 'react'
import { connect } from 'react-redux'
import { setProducts, addToCart } from '../actions'
import { getProducts } from '../apis/products'

const imagePlaceholderUrl = "https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png"

class App extends React.Component {
 
    componentDidMount() {
        getProducts()
            .then(products => {
                this.props.dispatch(setProducts(products))
            })
    }
    //fetchProducts()



    render() {
        const products = this.props.products
        return (
            <>
                <h1 className="shop-title">Ye Olde Shoppe</h1>
                <ul className="product-list">
                    {products.map(p => {
                        return (
                            <li key={p.id} className="product-item">
                                <h3 className="product-title">{p.title}</h3>
                                <img src={p.image || imagePlaceholderUrl} style={{ maxWidth: '200px' }} />
                                <button className="button" onClick={() => { 
                                    this.props.dispatch(addToCart(p.id)) 
                                    }}>
                                    Add to cart</button>
                            </li>
                        )
                    })}
                </ul>
            </>

        )
    }
}

function mapStateToProps(globalState) {
    return {
        products: globalState.products
    }
}
export default connect(mapStateToProps)(App)