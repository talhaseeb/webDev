const mongoose = require('mongoose');

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log("Hey Connection Successfull Mongo!! ")
    })
    .catch(err => {
        console.log('Oh No error Mongo');
        console.log(err);
    })

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save()
//     .then(p => {
//         console.log(p);
//     })
//     .catch(e => {
//         console.log(e);
//     })

const seedProducts = [
    {
        name: 'Milk',
        price: 1,
        category: 'dairy'
    },
    {
        name: 'Banana',
        price: 5.99,
        category: 'fruit'
    },
    {
        name: 'Carrot',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Curd',
        price: 0.76,
        category: 'dairy'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })