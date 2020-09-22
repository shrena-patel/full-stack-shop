// const csv = require('csv-parser')
// const fs = require('fs')
// const path = require('path')
// const results = [];
 
// // reading in a small amount of data at a time
// fs.createReadStream(path.join(__dirname, 'sample_products.csv'))
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     const products = results.filter(p => {
//       return p.Type == 'simple'
//     }).map(p => {
//       let id = Number(Object.values(p)[0])
//       return {
//         id: id,
//         title: p.Name,
//         description: p.Description,
//         image: p.Images
//       }
//     })
//     fs.writeFile(path.join(__dirname, 'products.json'), JSON.stringify(products, null, 4), () => {
//       console.log('all done')
//     })

//   })

// ABOVE CODE - is just used to create the products.json file

const products = require('./products.json')

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(() => {
      // Inserts seed entries
      return knex('products').insert(products)
        
        // [ {id: 1, title: 'Product 1', description: '', image: ''},
        // {id: 2, title: 'Product 2', description: '', image: ''},
        // {id: 3, title: 'Product 3', description: '', image: ''} ]
      
      
    })
}
