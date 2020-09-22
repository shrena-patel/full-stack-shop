import request from 'superagent'

export function getProducts() {
    return request.get('/api/products')
    .then(response => response.body)
}

