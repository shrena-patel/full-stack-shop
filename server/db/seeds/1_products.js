const csv = require('csv-parser')
const fs = require('fs')
const results = [];
 
fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  })


exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(() => {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, title: 'Product 1', description: '', image: ''},
        {id: 2, title: 'Product 2', description: '', image: ''},
        {id: 3, title: 'Product 3', description: '', image: ''}
      ])
    })
}
