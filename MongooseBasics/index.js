const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviesApp')
    .then(() => {
        console.log("Hey Connection Successfull!! ")
    })
    .catch(err => {
        console.log('Oh No error');
        console.log(err);
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
const antman = new Movie({ title: "Antman", year: 2016, score: 100, rating: "U" });