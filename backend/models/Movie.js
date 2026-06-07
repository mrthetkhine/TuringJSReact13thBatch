const mongoose = require('mongoose');
const { Schema } = mongoose;
const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    //use embedded model
    director:{
        type:{
            name:{
                type: String,
                required: true
            },
            phoneNo:{
                type:String,
                required:true,
            }
        }
    },
    year:{
        type: Number,
        required: true
    },
    genre: [String],
})
const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;