import React from 'react'
import {connect} from 'react-redux'

const imagePlaceholderUrl = "https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png"

class App extends React.Component {

    componentDidMount() {

    }
     //fetchProducts()



    render() {
        const products = this.props.products
        return (
            <>
            <h1>Hello</h1>
            <ul>
                {products.map(p => {
                    return (
                        <li key={p.id}>
                            <h3>{p.title}</h3>
                            <img src={p.image || imagePlaceholderUrl } style={{ maxWidth: '200px'}} />
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