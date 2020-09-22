import React from 'react'
import { connect } from 'react-redux'
import { setProducts} from '../actions'
import { getProducts } from '../apis/products'
import Products from './Products'


class App extends React.Component {
 
    componentDidMount() {
        // getProducts()
        //     .then(products => {
        //         this.props.dispatch(setProducts(products))
        //     })
        this.fetchProducts()
    }
    
    fetchProducts = () => {
        getProducts()
            .then(products => {
                this.props.dispatch(setProducts(products))
            })
    }

    checkout = () => {
        
    }



    render() {
        const products = this.props.products
        const cartCount = this.props.cartCount
        return (
            <>
                <header className="header">
                    <h1 className="shop-title">Ye Olde Shoppe</h1>
                    <h2>Cart ({cartCount})<button>Checkout</button></h2>
                </header>
                <Products products={this.props.products}/>
                {/* <ul className="product-list">
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
                </ul> */}
            </>

        )
    }
}

function mapStateToProps(globalState) {
    return {
        products: globalState.products,
        cartCount: globalState.cart.reduce((total, item) => {
            return total + item.quantity
        }, 0),
        cart: globalState.cart
    }
}
export default connect(mapStateToProps)(App)